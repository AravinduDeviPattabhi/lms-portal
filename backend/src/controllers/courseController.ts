import { Request, Response } from "express";
import prisma from "../config/prisma";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";

export const createCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, description, instructor, duration } = req.body;

    if (!title || !description || !instructor || !duration) {
      throw new ApiError(400, "All fields are required");
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        instructor,
        duration,
      },
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  }
);

export const getAllCourses = asyncHandler(
  async (req: Request, res: Response) => {
    const courses = await prisma.course.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      courses,
    });
  }
);

export const getCourseById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!course) {
      throw new ApiError(404, "Course not found");
    }

    res.json({
      success: true,
      course,
    });
  }
);

export const updateCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, instructor, duration } = req.body;

    const existingCourse = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingCourse) {
      throw new ApiError(404, "Course not found");
    }

    const course = await prisma.course.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
        instructor,
        duration,
      },
    });

    res.json({
      success: true,
      message: "Course updated successfully",
      course,
    });
  }
);

export const deleteCourse = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingCourse = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingCourse) {
      throw new ApiError(404, "Course not found");
    }

    await prisma.course.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Course deleted successfully",
    });
  }
);