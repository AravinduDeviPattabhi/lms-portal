import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";

import StudentForm from "../components/studentForm";
import { createStudent } from "../api/studentApi";

import type { StudentFormData } from "../schemas/studentSchema";

export default function CreateStudentPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: StudentFormData) {
    try {
      setLoading(true);

      await createStudent(data);

      toast.success("Student created successfully");

      navigate("/students");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to create student"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">
          <h1 className="mb-6 text-3xl font-bold">
            Add Student
          </h1>

          <StudentForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </main>
      </div>
    </div>
  );
}