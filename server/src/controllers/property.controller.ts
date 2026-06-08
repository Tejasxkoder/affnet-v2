import type { Request, Response } from "express"
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../services/property.service.js"
import type { AuthRequest } from "../shared/middlewares/auth.middleware.js"

export const createPropertyController = async (req: AuthRequest, res: Response) => {
  try {
    const property = await createProperty({
      ...req.body,
      createdBy: req.userId,
    })
    res.status(201).json({ success: true, message: "Property created", data: property })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to create property",
    })
  }
}

export const getAllPropertiesController = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const filters: Record<string, any> = {}

    if (req.query.city) filters["location.city"] = req.query.city
    if (req.query.type) filters.category = req.query.type
    if (req.query.status) filters.status = req.query.status

    const result = await getAllProperties(filters, page, limit)
    res.status(200).json({ success: true, data: result })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch properties",
    })
  }
}

export const getPropertyByIdController = async (req: Request, res: Response) => {
  try {
    const property = await getPropertyById(req.params.id as string)
    res.status(200).json({ success: true, data: property })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Property not found",
    })
  }
}

export const updatePropertyController = async (req: Request, res: Response) => {
  try {
    const property = await updateProperty(req.params.id as string, req.body)
    res.status(200).json({ success: true, message: "Property updated", data: property })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to update property",
    })
  }
}

export const deletePropertyController = async (req: Request, res: Response) => {
  try {
    await deleteProperty(req.params.id as string)
    res.status(200).json({ success: true, message: "Property deleted" })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete property",
    })
  }
}