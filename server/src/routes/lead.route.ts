import { Router } from "express"
import {
  createLeadController,
  getAllLeadsController,
  getLeadByIdController,
  updateLeadStatusController,
  deleteLeadController,
} from "../controllers/lead.controller.js"
import { authMiddleware } from "../shared/middlewares/auth.middleware.js"

const leadRouter = Router()

// Public — anyone can submit a lead
leadRouter.post("/", createLeadController)

// Protected
leadRouter.get("/", authMiddleware, getAllLeadsController)
leadRouter.get("/:id", authMiddleware, getLeadByIdController)
leadRouter.patch("/:id/status", authMiddleware, updateLeadStatusController)
leadRouter.delete("/:id", authMiddleware, deleteLeadController)

export default leadRouter