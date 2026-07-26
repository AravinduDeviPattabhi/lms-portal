import { Request, Response } from "express";
import prisma from "../config/prisma";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, instructor, duration } = req.body;

    // Validation
    if (!title || !description || !instructor || !duration) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create Course
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
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      instructor,
      duration,
    } = req.body;

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
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update course",
    });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      course,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch course",
    });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.course.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete course",
    });
  }
};