import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";

import CourseCard from "../components/CourseCard";
import Pagination from "../../../components/ui/Pagination";

import { deleteCourse, getAllCourses } from "../api/courseApi";

import type { Course } from "../types/course";

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.courses);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCourse(id);

      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== id)
      );

      toast.success("Course deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete course.");
    }
  };

  const filteredCourses = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search) ||
        course.instructor.toLowerCase().includes(search)
    );
  }, [courses, searchTerm]);

  const totalPages = Math.ceil(
    filteredCourses.length / ITEMS_PER_PAGE
  );

  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    return filteredCourses.slice(start, end);
  }, [filteredCourses, currentPage]);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Courses
              </h1>

              <p className="mt-2 text-slate-500">
                Browse all available courses.
              </p>
            </div>

            <Link
              to="/courses/create"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              + Create Course
            </Link>
          </div>

          {!loading && (
            <div className="mt-6">
              <input
                type="text"
                placeholder="🔍 Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          )}

          {loading ? (
            <p className="mt-8">Loading...</p>
          ) : filteredCourses.length === 0 ? (
            <div className="mt-10 rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-xl font-semibold text-slate-700">
                No courses found
              </h2>

              <p className="mt-2 text-slate-500">
                Try searching with a different keyword.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {paginatedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onDelete={handleDelete}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}