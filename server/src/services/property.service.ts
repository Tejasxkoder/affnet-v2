/**
 * @file property.service.ts
 * @description Service for property CRUD operations
 * @tags service, property
 */

import { PropertyModel } from "../models/properties.model.js";
import { NotFoundError, APIError } from "../shared/errors/error-handler.js";

export const createProperty = async (propertyData: any) => {
  try {
    const property = await PropertyModel.create(propertyData);
    return property;
  } catch (error) {
    throw new APIError("Failed to create property", 400);
  }
};

export const getAllProperties = async (filters: any = {}, page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const properties = await PropertyModel.find(filters)
      .skip(skip)
      .limit(limit)
      .populate("createdBy", "firstName lastName email")
      .sort({ createdAt: -1 });

    const total = await PropertyModel.countDocuments(filters);

    return {
      properties,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  } catch (error) {
    throw new APIError("Failed to fetch properties", 500);
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const property = await PropertyModel.findById(id)
      .populate("createdBy", "firstName lastName email phone");

    if (!property) {
      throw new NotFoundError("Property", id);
    }

    // Increment views
    property.views = (property.views || 0) + 1;
    await property.save();

    return property;
  } catch (error) {
    throw error;
  }
};

export const updateProperty = async (id: string, updateData: any) => {
  try {
    const property = await PropertyModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!property) {
      throw new NotFoundError("Property", id);
    }

    return property;
  } catch (error) {
    throw error;
  }
};

export const deleteProperty = async (id: string) => {
  try {
    const property = await PropertyModel.findByIdAndDelete(id);

    if (!property) {
      throw new NotFoundError("Property", id);
    }

    return property;
  } catch (error) {
    throw error;
  }
};
