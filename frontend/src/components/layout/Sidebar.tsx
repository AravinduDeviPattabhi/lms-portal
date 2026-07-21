import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-full p-5">
      <h2 className="text-xl font-bold mb-8">
        LMS Portal
      </h2>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;