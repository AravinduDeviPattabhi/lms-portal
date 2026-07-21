import { Bell, Search, UserCircle2 } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">
      {/* Left */}
      <h1 className="text-2xl font-bold text-white">
        LMS Portal
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-slate-800 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-white placeholder:text-gray-400"
          />
        </div>

        <Bell className="text-white cursor-pointer" />

        <UserCircle2
          size={34}
          className="text-white cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Navbar;