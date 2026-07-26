import { Request, Response } from "express";
import prisma from "../config/prisma";
import asyncHandler from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";

export const createStudent = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
      address,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !gender ||
      !dateOfBirth
    ) {
      throw new ApiError(400, "All required fields must be provided");
    }

    const existingStudent = await prisma.student.findUnique({
      where: {
        email,
      },
    });

    if (existingStudent) {
      throw new ApiError(409, "Student already exists with this email");
    }

    const student = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        address,
      },
    });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      student,
    });
  }
);

export const getAllStudents = asyncHandler(
  async (req: Request, res: Response) => {
    const students = await prisma.student.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      students,
    });
  }
);

export const getStudentById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const student = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!student) {
      throw new ApiError(404, "Student not found");
    }

    res.json({
      success: true,
      student,
    });
  }
);

export const updateStudent = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const {
      firstName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
      address,
    } = req.body;

    const existingStudent = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingStudent) {
      throw new ApiError(404, "Student not found");
    }

    const emailExists = await prisma.student.findFirst({
      where: {
        email,
        NOT: {
          id: Number(id),
        },
      },
    });

    if (emailExists) {
      throw new ApiError(409, "Email already exists");
    }

    const student = await prisma.student.update({
      where: {
        id: Number(id),
      },
      data: {
        firstName,
        lastName,
        email,
        phone,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        address,
      },
    });

    res.json({
      success: true,
      message: "Student updated successfully",
      student,
    });
  }
);

export const deleteStudent = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const existingStudent = await prisma.student.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingStudent) {
      throw new ApiError(404, "Student not found");
    }

    await prisma.student.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      success: true,
      message: "Student deleted successfully",
    });
  }
);