import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";
import { getDashboardStats } from "../controllers/dashboardController";

const router = Router();

router.get("/stats", authenticate, getDashboardStats);

export default router;