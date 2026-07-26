import api from "../../../services/api/axios";

import type { Course } from "../types/course";
import type { CourseFormData } from "../schemas/courseSchema";

interface GetCoursesResponse {
  success: boolean;
  courses: Course[];
}

export const getAllCourses = async (): Promise<GetCoursesResponse> => {
  const response = await api.get<GetCoursesResponse>("/courses");
  return response.data;
};

export const getCourseById = async (id: number) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (data: CourseFormData) => {
  const response = await api.post("/courses", data);
  return response.data;
};

export const updateCourse = async (
  id: number,
  data: CourseFormData
) => {
  const response = await api.put(`/courses/${id}`, data);
  return response.data;
};

export const deleteCourse = async (id: number) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};