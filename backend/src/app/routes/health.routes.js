import express from "express"
import { healthController } from "../controllers"

const routes = express.Router()

routes.get("/health", healthController.status)

export default routes
