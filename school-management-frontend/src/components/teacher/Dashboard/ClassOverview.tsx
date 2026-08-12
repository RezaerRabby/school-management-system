const classes = [
  {
    name: "Class 10 - A",
    subject: "Mathematics",
    students: 35,
  },
  {
    name: "Class 9 - B",
    subject: "Mathematics",
    students: 32,
  },
  {
    name: "Class 8 - A",
    subject: "Science",
    students: 30,
  },
];

export default function ClassOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        My Classes
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Your assigned classes
      </p>

      <div className="mt-4 space-y-3">
        {classes.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-800">
                {item.name}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {item.subject}
              </p>
            </div>

            <span className="text-xs text-slate-500">
              {item.students} Students
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}