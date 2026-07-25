import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";

import CourseForm from "../components/CourseForm";

import {
  getCourseById,
  updateCourse,
} from "../api/courseApi";

import type { CourseFormData } from "../schemas/courseSchema";

function EditCoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState<CourseFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(Number(id));
        setCourse(response.course);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleUpdate = async (data: CourseFormData) => {
    try {
      await updateCourse(Number(id), data);

      alert("Course updated successfully!");

      navigate("/courses");
    } catch (error) {
      console.error(error);
      alert("Failed to update course.");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Edit Course
          </h1>

          <p className="mt-2 text-slate-500">
            Update the course details below.
          </p>

          <div className="mt-8 max-w-3xl">
            {loading ? (
              <p>Loading...</p>
            ) : course ? (
              <CourseForm
                initialData={course}
                submitText="Update Course"
                onSubmit={handleUpdate}
              />
            ) : (
              <p>Course not found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditCoursePage;