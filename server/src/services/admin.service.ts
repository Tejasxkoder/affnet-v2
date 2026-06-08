import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";
import { JWT_ADMIN_PASSWORD } from "../config/env.js";

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SigninData {
  email: string;
  password: string;
}

const SALT_ROUNDS = 10;

const PASSWORD_VALIDATION_SCHEMA = z
  .string()
  .min(8, { message: "Password must contain at least 8 characters" })
  .max(100)
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[@$!%*?&]/, {
    message: "Password must contain at least one special character",
  });

export const signupAdmin = async (data: SignupData) => {
  try {
    const signupValidationSchema = z.object({
      firstName: z
        .string()
        .min(3, { message: "First name must be at least 3 characters" })
        .max(100),
      lastName: z
        .string()
        .min(3, { message: "Last name must be at least 3 characters" })
        .max(100),
      email: z
        .string()
        .min(3)
        .max(100)
        .email({ message: "Invalid email format" }),
      password: PASSWORD_VALIDATION_SCHEMA,
    });

    const validationResult = signupValidationSchema.safeParse(data);
    if (!validationResult.success) {
      throw new Error(validationResult.error.issues[0]?.message || "Validation failed");
    }

    const { firstName, lastName, email, password } = data;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "admin",
      isActive: true,
    });

    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Signup failed"
    );
  }
};

export const signinAdmin = async (data: SigninData) => {
  try {
    const { email, password } = data;

    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }

    if (!user.isActive) {
      throw new Error("User account is inactive");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      {
        id: user._id.toString(),
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      JWT_ADMIN_PASSWORD,
      {
        expiresIn: "7d",
      }
    );

    return {
      success: true,
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Authentication failed"
    );
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch user"
    );
  }
};

export const updateUserProfile = async (
  userId: string,
  updateData: Partial<SignupData>
) => {
  try {
    const allowedFields = ["firstName", "lastName"];
    const filteredData = Object.keys(updateData)
      .filter((key) => allowedFields.includes(key))
      .reduce(
        (obj, key) => {
          obj[key as keyof typeof obj] =
            updateData[key as keyof typeof updateData];
          return obj;
        },
        {} as any
      );

    const user = await UserModel.findByIdAndUpdate(userId, filteredData, {
      new: true,
    }).select("-password");

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to update profile"
    );
  }
};

