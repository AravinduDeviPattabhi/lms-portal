import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import RecentCourses from "../components/dashboard/RecentCourses";
import UpcomingAssignments from "../components/dashboard/UpcomingAssignments";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <DashboardHeader />

      <StatsCards />

      <div className="grid grid-cols-2 gap-6">
        <RecentCourses />

        <UpcomingAssignments />
      </div>

      <ActivityFeed />
    </div>
  );
}

export default Dashboard;