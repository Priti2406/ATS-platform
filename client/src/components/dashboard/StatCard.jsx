import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import Card from "../ui/Card";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trend = "up",
}) {
  const positive = trend === "up";

  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </h3>

          {change && (
            <div className="mt-2 flex items-center gap-1 text-xs">
              {positive ? (
                <ArrowUpRight
                  size={14}
                  className="text-emerald-600"
                />
              ) : (
                <ArrowDownRight
                  size={14}
                  className="text-red-600"
                />
              )}

              <span
                className={
                  positive
                    ? "font-medium text-emerald-600"
                    : "font-medium text-red-600"
                }
              >
                {change}
              </span>

              <span className="text-gray-400">
                vs last month
              </span>
            </div>
          )}
        </div>

        {Icon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Icon size={21} />
          </div>
        )}
      </div>
    </Card>
  );
}