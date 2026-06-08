import crypto from "crypto";

export const generateRandomId = (): string => {
  return crypto.randomBytes(16).toString("hex");
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+91|0)[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ""));
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export const calculatePagination = (
  total: number,
  page: number,
  limit: number
) => {
  const totalPages = Math.ceil(total / limit);
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    total,
    totalPages,
    skip,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};

export const sanitizeString = (str: string): string => {
  return str
    .trim()
    .replace(/[<>]/g, "")
    .substring(0, 500);
};

export const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
};

export const getDaysSince = (date: Date): number => {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

export const isRecentDate = (date: Date, days: number = 7): boolean => {
  return getDaysSince(date) <= days;
};

export const truncateString = (
  str: string,
  length: number,
  suffix: string = "..."
): string => {
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
