import { useNavigate } from "react-router-dom";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";

import CourseForm from "../components/CourseForm";
import { createCourse } from "../api/courseApi";
import type { CourseFormData } from "../schemas/courseSchema";

function CreateCoursePage() {
  const navigate = useNavigate();

  const handleCreate = async (data: CourseFormData) => {
    try {
      await createCourse(data);

      alert("Course created successfully!");

      navigate("/courses");
    } catch (error) {
      console.error(error);
      alert("Failed to create course.");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Create Course
          </h1>

          <p className="mt-2 text-slate-500">
            Fill in the details below to create a new course.
          </p>

          <div className="mt-8 max-w-3xl">
            <CourseForm
              submitText="Create Course"
              onSubmit={handleCreate}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateCoursePage;