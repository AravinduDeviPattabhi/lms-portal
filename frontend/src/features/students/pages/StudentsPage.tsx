import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import Sidebar from "../../dashboard/components/Sidebar";
import Topbar from "../../dashboard/components/Topbar";
import Pagination from "../../../components/ui/Pagination";

import {
  getAllStudents,
  deleteStudent,
} from "../api/studentApi";

import type { Student } from "../types/student";

const ITEMS_PER_PAGE = 10;

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  async function fetchStudents() {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch {
      toast.error("Failed to load students");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    try {
      await deleteStudent(id);

      setStudents((prev) =>
        prev.filter((student) => student.id !== id)
      );

      toast.success("Student deleted successfully");
    } catch {
      toast.error("Failed to delete student");
    }
  }

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const fullName =
        `${student.firstName} ${student.lastName}`.toLowerCase();

      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [students, searchTerm]);

  const totalPages = Math.ceil(
    filteredStudents.length / ITEMS_PER_PAGE
  );

  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              Students
            </h1>

            <Link
              to="/students/create"
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Add Student
            </Link>
          </div>

          <input
            type="text"
            placeholder="Search students..."
            className="mb-5 w-full rounded border p-2"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg bg-white shadow">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left">Gender</th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {paginatedStudents.map((student) => (
                      <tr
                        key={student.id}
                        className="border-t"
                      >
                        <td className="p-3">
                          {student.firstName}{" "}
                          {student.lastName}
                        </td>

                        <td className="p-3">
                          {student.email}
                        </td>

                        <td className="p-3">
                          {student.phone}
                        </td>

                        <td className="p-3">
                          {student.gender}
                        </td>

                        <td className="space-x-2 p-3">
                          <Link
                            to={`/students/edit/${student.id}`}
                            className="text-blue-600"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() =>
                              handleDelete(student.id)
                            }
                            className="text-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}

                    {paginatedStudents.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="p-6 text-center text-gray-500"
                        >
                          No students found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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