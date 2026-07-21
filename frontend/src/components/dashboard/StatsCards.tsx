
import { stats } from "../../data/dashboard";
function StatsCards() {

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-xl shadow p-6 border"
        >
          <h3 className="text-gray-500 text-sm">
            {stat.title}
          </h3>

          <p className="text-3xl font-bold mt-3">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;