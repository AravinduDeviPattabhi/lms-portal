import { useAuth } from "../../../context/AuthContext";

function Topbar() {
  const { user } = useAuth();

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-slate-500">
          Welcome back, {user?.name}
        </p>
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
        {user?.name?.charAt(0).toUpperCase()}
      </div>
    </header>
  );
}

export default Topbar;