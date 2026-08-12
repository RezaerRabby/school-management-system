const assignments = [
  {
    title: "Algebra Exercise",
    className: "Class 10 - A",
    submissions: "28/35",
  },
  {
    title: "Geometry Project",
    className: "Class 9 - B",
    submissions: "25/32",
  },
  {
    title: "Science Assignment",
    className: "Class 8 - A",
    submissions: "27/30",
  },
];

export default function AssignmentsOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Assignments
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Recent assignment submissions
      </p>

      <div className="mt-4 space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="rounded-lg border border-slate-100 p-3"
          >
            <p className="text-sm font-medium text-slate-800">
              {assignment.title}
            </p>

            <div className="mt-1 flex justify-between text-xs text-slate-500">
              <span>{assignment.className}</span>
              <span>{assignment.submissions}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}