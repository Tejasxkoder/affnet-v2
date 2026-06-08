import { Router } from "express"
import {
  createPropertyController,
  getAllPropertiesController,
  getPropertyByIdController,
  updatePropertyController,
  deletePropertyController,
} from "../controllers/property.controller.js"
import { authMiddleware } from "../shared/middlewares/auth.middleware.js"
import { upload } from "../shared/middlewares/upload.middleware.js"

const propertyRouter = Router()

// Public
propertyRouter.get("/", getAllPropertiesController)
propertyRouter.get("/:id", getPropertyByIdController)

// Protected (admin only)
propertyRouter.post("/", authMiddleware, upload.array("images", 10), createPropertyController)
propertyRouter.put("/:id", authMiddleware, updatePropertyController)
propertyRouter.delete("/:id", authMiddleware, deletePropertyController)

export default propertyRouter