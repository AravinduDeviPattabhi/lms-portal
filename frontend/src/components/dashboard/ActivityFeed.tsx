import { recentActivities } from "../../data/dashboard";

function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-3">
        {recentActivities.map((activity) => (
          <div
            key={activity}
            className="border rounded-lg p-4 hover:bg-slate-50"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;