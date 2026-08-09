const activities = [
  {
    title: "New student registered",
    description: "Mahir Hasan was added to Class 8.",
    time: "10 minutes ago",
  },
  {
    title: "Teacher added",
    description: "A new Mathematics teacher was added.",
    time: "30 minutes ago",
  },
  {
    title: "Result published",
    description: "Final Examination 2026 result published.",
    time: "1 hour ago",
  },
  {
    title: "Notice published",
    description: "Annual sports notice was published.",
    time: "2 hours ago",
  },
];

export default function RecentActivities() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Activities
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Latest activities in your school
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex gap-4 border-b pb-5 last:border-0 last:pb-0"
          >
            <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-blue-600" />

            <div className="min-w-0">
              <h3 className="font-medium text-gray-900">
                {activity.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {activity.description}
              </p>

              <p className="mt-2 text-xs text-gray-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}