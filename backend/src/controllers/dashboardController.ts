import { Request, Response } from "express";

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: {
        totalCourses: 8,
        pendingAssignments: 14,
        attendance: 96,
        progress: 78,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};