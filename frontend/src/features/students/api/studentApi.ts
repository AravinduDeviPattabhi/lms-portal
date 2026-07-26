import api from "../../../services/api/axios";
import type {
  Student,
  StudentResponse,
  StudentsResponse,
} from "../types/student";

export const getAllStudents = async (): Promise<Student[]> => {
  const response = await api.get<StudentsResponse>("/students");
  return response.data.students;
};

export const getStudentById = async (
  id: number
): Promise<Student> => {
  const response = await api.get<StudentResponse>(`/students/${id}`);
  return response.data.student;
};

export const createStudent = async (
  student: Omit<Student, "id" | "createdAt" | "updatedAt">
) => {
  return api.post("/students", student);
};

export const updateStudent = async (
  id: number,
  student: Omit<Student, "id" | "createdAt" | "updatedAt">
) => {
  return api.put(`/students/${id}`, student);
};

export const deleteStudent = async (id: number) => {
  return api.delete(`/students/${id}`);
};