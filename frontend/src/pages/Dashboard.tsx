import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import RecentCourses from "../components/dashboard/RecentCourses";
import UpcomingAssignments from "../components/dashboard/UpcomingAssignments";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import DashboardGrid from "../components/dashboard/DashboardGrid";

function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <DashboardHeader />

      <StatsCards />

      <DashboardGrid>
  <RecentCourses />
  <UpcomingAssignments />
</DashboardGrid>

      <ActivityFeed />
    </div>
  );
}

export default Dashboard;