import { LeadModel } from "../models/lead.model.js"

export const createLead = async (leadData: any) => {
  const lead = await LeadModel.create(leadData)
  return lead
}

export const getAllLeads = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit
  const leads = await LeadModel.find()
    .skip(skip)
    .limit(limit)
    .populate("property", "title location")
    .sort({ createdAt: -1 })
  const total = await LeadModel.countDocuments()
  return { leads, total, page, pages: Math.ceil(total / limit) }
}

export const getLeadById = async (id: string) => {
  const lead = await LeadModel.findById(id).populate("property")
  if (!lead) throw new Error("Lead not found")
  return lead
}

export const updateLeadStatus = async (id: string, status: string) => {
  const lead = await LeadModel.findByIdAndUpdate(id, { status }, { new: true })
  if (!lead) throw new Error("Lead not found")
  return lead
}

export const deleteLead = async (id: string) => {
  const lead = await LeadModel.findByIdAndDelete(id)
  if (!lead) throw new Error("Lead not found")
  return lead
}