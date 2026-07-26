import { Router } from "express";

import { authenticate } from "../middleware/authMiddleware";

import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/courseController";

const router = Router();

router.get("/", authenticate, getAllCourses);

router.get("/:id", authenticate, getCourseById);

router.post("/", authenticate, createCourse);

router.put("/:id", authenticate, updateCourse);

router.delete("/:id", authenticate, deleteCourse);

export default router;