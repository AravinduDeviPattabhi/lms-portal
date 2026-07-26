import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";

import StudentForm from "../components/studentForm";
import {
  getStudentById,
  updateStudent,
} from "../api/studentApi";

import type { StudentFormData } from "../schemas/studentSchema";

export default function EditStudentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [student, setStudent] =
    useState<StudentFormData>();

  useEffect(() => {
    fetchStudent();
  }, []);

  async function fetchStudent() {
    try {
      const data = await getStudentById(Number(id));

      setStudent({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth.slice(0, 10),
        address: data.address || "",
      });
    } catch {
      toast.error("Student not found");
      navigate("/students");
    } finally {
      setLoading(false);
    }
  }

  async function onSubmit(data: StudentFormData) {
    try {
      await updateStudent(Number(id), data);

      toast.success("Student updated successfully");

      navigate("/students");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to update student"
      );
    }
  }

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">
          <h1 className="mb-6 text-3xl font-bold">
            Edit Student
          </h1>

          {student && (
            <StudentForm
              defaultValues={student}
              onSubmit={onSubmit}
            />
          )}
        </main>
      </div>
    </div>
  );
}