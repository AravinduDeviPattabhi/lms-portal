import { recentCourses } from "../../data/dashboard";

function RecentCourses() {

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Courses
      </h2>

      <div className="space-y-3">
        {recentCourses.map((course) => (
          <div
            key={course}
            className="border rounded-lg p-4 hover:bg-slate-50"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentCourses;