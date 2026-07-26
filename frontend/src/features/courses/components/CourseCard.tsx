import { BookOpen, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../../../components/ui/Card";

import type { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
  onDelete: (id: number) => Promise<void>;
}

function CourseCard({ course, onDelete }: CourseCardProps) {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${course.title}"?`
    );

    if (!confirmed) return;

    await onDelete(course.id);
  };

  return (
    <Card className="p-6 transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <BookOpen className="text-blue-600" size={28} />

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          Course
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-800">
        {course.title}
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        {course.description}
      </p>

      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2 text-slate-600">
          <User size={18} />
          <span>{course.instructor}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <Clock size={18} />
          <span>{course.duration}</span>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to={`/courses/${course.id}/edit`}
          className="flex-1 rounded-lg bg-yellow-500 py-2 text-center text-white hover:bg-yellow-600"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="flex-1 rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

export default CourseCard;