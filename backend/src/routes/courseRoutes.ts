import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";


import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/courseController";
const router = Router();

router.get("/", authenticate, getAllCourses);
// Create Course
router.post("/", authenticate, createCourse);
router.put("/:id", authenticate, updateCourse);
router.get("/:id", authenticate, getCourseById);

export default router;