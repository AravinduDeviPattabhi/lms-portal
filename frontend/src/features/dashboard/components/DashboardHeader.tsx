import { useAuth } from "../../../context/AuthContext";

function DashboardHeader() {
  const { user } = useAuth();

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome back, {user?.name} 👋
      </h1>

      <p className="mt-2 text-slate-500">
        Here's what's happening in your LMS today.
      </p>
    </div>
  );
}

export default DashboardHeader;