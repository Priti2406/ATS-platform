import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import Avatar from "../ui/Avatar";

export default function Topbar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <Menu size={21} />
          </button>

          <div className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 sm:flex">
            <Search
              size={17}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-48 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100">
            <Bell size={20} />

            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="hidden h-6 w-px bg-gray-200 sm:block" />

          <div className="flex items-center gap-2.5">
            <Avatar
              name={user?.name || "Recruiter"}
              size="sm"
            />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">
                {user?.name || "Recruiter"}
              </p>

              <p className="text-xs text-gray-400">
                Recruiter
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}