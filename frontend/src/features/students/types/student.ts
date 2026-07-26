export type Gender = "MALE" | "FEMALE" | "OTHER";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  dateOfBirth: string;
  address?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface StudentResponse {
  success: boolean;
  student: Student;
}

export interface StudentsResponse {
  success: boolean;
  students: Student[];
}