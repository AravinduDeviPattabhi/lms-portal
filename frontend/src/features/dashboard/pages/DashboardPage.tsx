import { useEffect, useState } from "react";
import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  BarChart3,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../api/dashboardApi";
import type { DashboardStats } from "../types/dashboard";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboardStats();
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <DashboardHeader />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Courses"
              value={stats?.totalCourses ?? 0}
              icon={BookOpen}
            />

            <StatCard
              title="Assignments"
              value={stats?.pendingAssignments ?? 0}
              icon={ClipboardList}
            />

            <StatCard
              title="Attendance"
              value={`${stats?.attendance ?? 0}%`}
              icon={GraduationCap}
            />

            <StatCard
              title="Progress"
              value={`${stats?.progress ?? 0}%`}
              icon={BarChart3}
            />
          </div>
        </main>
      </div>
    </div>
  );
}