import type { Request, Response } from "express"
import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
} from "../services/lead.service.js"

export const createLeadController = async (req: Request, res: Response) => {
  try {
    const lead = await createLead(req.body)
    res.status(201).json({ success: true, message: "Lead submitted successfully", data: lead })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to create lead",
    })
  }
}

export const getAllLeadsController = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const result = await getAllLeads(page, limit)
    res.status(200).json({ success: true, data: result })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch leads",
    })
  }
}

export const getLeadByIdController = async (req: Request, res: Response) => {
  try {
    const lead = await getLeadById(req.params.id as string)
    res.status(200).json({ success: true, data: lead })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Lead not found",
    })
  }
}

export const updateLeadStatusController = async (req: Request, res: Response) => {
  try {
    const lead = await updateLeadStatus(req.params.id as string, req.body.status)
    res.status(200).json({ success: true, message: "Lead status updated", data: lead })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to update lead",
    })
  }
}

export const deleteLeadController = async (req: Request, res: Response) => {
  try {
    await deleteLead(req.params.id as string)
    res.status(200).json({ success: true, message: "Lead deleted" })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete lead",
    })
  }
}