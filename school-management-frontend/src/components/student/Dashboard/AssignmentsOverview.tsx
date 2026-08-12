const assignments = [
  {
    title: "Mathematics Homework",
    due: "12 August 2026",
    status: "Pending",
  },
  {
    title: "Science Project",
    due: "15 August 2026",
    status: "In Progress",
  },
  {
    title: "English Essay",
    due: "18 August 2026",
    status: "Pending",
  },
];

export default function AssignmentsOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Assignments
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Recent assignments
      </p>

      <div className="mt-4 space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="rounded-lg border border-slate-100 p-3"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-800">
                {assignment.title}
              </p>

              <span className="rounded-full bg-yellow-50 px-2 py-1 text-[10px] text-yellow-700">
                {assignment.status}
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Due: {assignment.due}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}