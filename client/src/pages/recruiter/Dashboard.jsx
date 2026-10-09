import {
  BriefcaseBusiness,
  CalendarDays,
  UserCheck,
  Users,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import Card from "../../components/ui/Card";
import MatchScore from "../../components/ui/MatchScore";
import Avatar from "../../components/ui/Avatar";
import Badge from "../../components/ui/Badge";

export default function RecruiterDashboard() {
  const candidates = [
    {
      name: "Arjun Sharma",
      role: "Frontend Developer",
      score: 94,
      status: "Interview",
    },
    {
      name: "Priya Das",
      role: "Full Stack Developer",
      score: 89,
      status: "Screening",
    },
    {
      name: "Rahul Sen",
      role: "Backend Developer",
      score: 82,
      status: "Applied",
    },
    {
      name: "Ananya Roy",
      role: "UI/UX Designer",
      score: 76,
      status: "Screening",
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Recruitment Overview
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Good morning, Recruiter
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your hiring process.
          </p>
        </div>

        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700">
          <BriefcaseBusiness size={17} />
          Create Job
        </button>
      </div>

      {/* Stats */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Active Jobs"
          value="24"
          change="+12%"
          icon={BriefcaseBusiness}
        />

        <StatCard
          title="Total Candidates"
          value="1,284"
          change="+18%"
          icon={Users}
        />

        <StatCard
          title="Interviews"
          value="48"
          change="+8%"
          icon={CalendarDays}
        />

        <StatCard
          title="Hires"
          value="32"
          change="+14%"
          icon={UserCheck}
        />
      </div>

      {/* Main grid */}

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        {/* Hiring activity */}

        <Card className="xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">
                Hiring Activity
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Candidate applications over the last 7 days
              </p>
            </div>

            <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 outline-none">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>

          <div className="mt-8 flex h-56 items-end gap-3 sm:gap-6">
            {[42, 58, 45, 76, 62, 88, 70].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className="w-full max-w-10 rounded-t-md bg-indigo-500 transition hover:bg-indigo-600"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span className="text-[11px] text-gray-400">
                    {
                      [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                      ][index]
                    }
                  </span>
                </div>
              )
            )}
          </div>
        </Card>

        {/* Funnel */}

        <Card>
          <div>
            <h2 className="font-semibold text-gray-900">
              Recruitment Funnel
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Candidate progression
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              ["Applied", 1284, "bg-indigo-500"],
              ["Screening", 624, "bg-blue-500"],
              ["Interview", 218, "bg-purple-500"],
              ["Offer", 74, "bg-amber-500"],
              ["Hired", 32, "bg-emerald-500"],
            ].map(([label, value, color]) => (
              <div key={label}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="font-medium text-gray-600">
                    {label}
                  </span>

                  <span className="font-semibold text-gray-800">
                    {value}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${color}`}
                    style={{
                      width: `${Math.min(
                        (value / 1284) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Candidates */}

      <Card className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">
              Top Candidates
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Highest matching candidates across active jobs
            </p>
          </div>

          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View all
          </button>
        </div>

        <div className="mt-5 divide-y divide-gray-100">
          {candidates.map((candidate) => (
            <div
              key={candidate.name}
              className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <Avatar
                  name={candidate.name}
                  size="md"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {candidate.name}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    {candidate.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge
                  variant={
                    candidate.status === "Interview"
                      ? "purple"
                      : candidate.status === "Screening"
                        ? "warning"
                        : "info"
                  }
                >
                  {candidate.status}
                </Badge>

                <div className="flex items-center gap-2">
                  <span className="hidden text-xs text-gray-400 sm:block">
                    AI Match
                  </span>

                  <MatchScore
                    score={candidate.score}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Bottom section */}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-semibold text-gray-900">
            Recent Activity
          </h2>

          <div className="mt-5 space-y-5">
            {[
              "Priya Das moved to Interview",
              "New application received for React Developer",
              "Arjun Sharma completed screening",
              "New candidate added to Backend Engineer",
            ].map((activity, index) => (
              <div
                key={index}
                className="flex gap-3"
              >
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />

                <div>
                  <p className="text-sm text-gray-700">
                    {activity}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {index + 1} hour
                    {index !== 0 ? "s" : ""} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-gray-900">
            Quick Insights
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-indigo-50 p-4">
              <p className="text-xs text-indigo-600">
                Avg. Match Score
              </p>

              <p className="mt-1 text-2xl font-bold text-indigo-700">
                84%
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="text-xs text-emerald-600">
                Hiring Rate
              </p>

              <p className="mt-1 text-2xl font-bold text-emerald-700">
                12.8%
              </p>
            </div>

            <div className="rounded-lg bg-amber-50 p-4">
              <p className="text-xs text-amber-600">
                Avg. Time to Hire
              </p>

              <p className="mt-1 text-2xl font-bold text-amber-700">
                18d
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-4">
              <p className="text-xs text-purple-600">
                Interviews This Week
              </p>

              <p className="mt-1 text-2xl font-bold text-purple-700">
                16
              </p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}