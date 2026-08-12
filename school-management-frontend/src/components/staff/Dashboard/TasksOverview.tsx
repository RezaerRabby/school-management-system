const tasks = [
  {
    title: "Student documentation",
    status: "In Progress",
  },
  {
    title: "Monthly attendance report",
    status: "Pending",
  },
  {
    title: "Office inventory update",
    status: "Completed",
  },
];

export default function TasksOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        My Tasks
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Recent assigned tasks
      </p>

      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
          >
            <span className="text-sm text-slate-700">
              {task.title}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}