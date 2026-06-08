export class APIError extends Error {
  statusCode: number;
  errorType: string;

  constructor(message: string, statusCode: number = 500, errorType: string = "InternalError") {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    Object.setPrototypeOf(this, APIError.prototype);
  }
}

export class ValidationError extends APIError {
  errors: Record<string, string[]>;

  constructor(message: string, errors: Record<string, string[]> = {}) {
    super(message, 400, "ValidationError");
    this.errors = errors;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class AuthenticationError extends APIError {
  constructor(message: string = "Authentication failed") {
    super(message, 401, "AuthenticationError");
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

export class AuthorizationError extends APIError {
  constructor(message: string = "Insufficient permissions") {
    super(message, 403, "AuthorizationError");
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }
}

export class NotFoundError extends APIError {
  constructor(resource: string, identifier: string) {
    super(`${resource} with id "${identifier}" not found`, 404, "NotFoundError");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ConflictError extends APIError {
  constructor(message: string = "Resource already exists") {
    super(message, 409, "ConflictError");
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

export interface APIResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
  timestamp?: string;
}

export const handleError = (error: Error): APIResponse => {
  const isAPIError = error instanceof APIError;

  return {
    success: false,
    message: error.message || "An error occurred",
    ...(isAPIError && {
      error: {
        type: (error as APIError).errorType,
        statusCode: (error as APIError).statusCode,
      },
    }),
    timestamp: new Date().toISOString(),
  };
};
