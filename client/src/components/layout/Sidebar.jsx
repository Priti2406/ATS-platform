import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navigation = [
  {
    label: "Dashboard",
    path: "/recruiter/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Jobs",
    path: "/recruiter/jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Candidates",
    path: "/recruiter/candidates",
    icon: Users,
  },
  {
    label: "Pipeline",
    path: "/recruiter/pipeline",
    icon: FileText,
  },
  {
    label: "Interviews",
    path: "/recruiter/interviews",
    icon: CalendarDays,
  },
  {
    label: "Analytics",
    path: "/recruiter/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar({
  mobileOpen = false,
  onClose,
}) {
  const { logout } = useAuth();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-64 flex-col
          border-r border-gray-800
          bg-gray-950 text-white
          transition-transform duration-300
          lg:translate-x-0
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
              <BriefcaseBusiness size={19} />
            </div>

            <div>
              <h1 className="text-sm font-bold">
                HireFlow
              </h1>

              <p className="text-[10px] text-gray-500">
                AI Recruitment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        <div className="px-3 py-5">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-lg
                    px-3 py-2.5 text-sm font-medium
                    transition
                    ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-400 hover:bg-gray-900 hover:text-white"
                    }
                    `
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-gray-800 p-3">
          <NavLink
            to="/recruiter/settings"
            className="mb-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 hover:bg-gray-900 hover:text-white"
          >
            <Settings size={18} />
            Settings
          </NavLink>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}