import { upcomingAssignments } from "../../data/dashboard";

function UpcomingAssignments() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-2xl font-bold mb-4">
        Upcoming Assignments
      </h2>

      <div className="space-y-3">
        {upcomingAssignments.map((assignment) => (
          <div
            key={assignment}
            className="border rounded-lg p-4 hover:bg-slate-50"
          >
            {assignment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingAssignments;