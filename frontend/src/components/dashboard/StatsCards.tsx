import { stats } from "../../data/dashboard";

function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition hover:shadow-xl"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 font-medium">
              {stat.title}
            </span>

            <div
              className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}
            >
              {stat.icon}
            </div>
          </div>

          <h2 className="text-4xl font-bold text-slate-800">
            {stat.value}
          </h2>

          <p className="text-green-600 text-sm mt-2">
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;