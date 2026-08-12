import {
  ClipboardCheck,
  Award,
  ClipboardList,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    title: "Attendance",
    value: "94%",
    description: "Overall attendance",
    icon: ClipboardCheck,
  },
  {
    title: "Average Result",
    value: "87%",
    description: "Current academic result",
    icon: Award,
  },
  {
    title: "Assignments",
    value: "8",
    description: "Pending assignments",
    icon: ClipboardList,
  },
  {
    title: "Classes Today",
    value: "5",
    description: "Scheduled classes",
    icon: CalendarDays,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {stat.title}
              </p>

              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Icon size={18} />
              </div>
            </div>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              {stat.value}
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}