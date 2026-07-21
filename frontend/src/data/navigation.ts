import {
  LayoutDashboard,
  BookOpen,
  Code2,
  ClipboardList,
  Trophy,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: BookOpen,
  },
  {
    name: "Coding Problems",
    path: "/coding-problems",
    icon: Code2,
  },
  {
    name: "Assignments",
    path: "/assignments",
    icon: ClipboardList,
  },
  {
    name: "Contests",
    path: "/contests",
    icon: Trophy,
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];