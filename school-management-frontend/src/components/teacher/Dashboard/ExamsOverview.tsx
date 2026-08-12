const exams = [
  {
    title: "Mid Term Examination",
    className: "Class 10 - A",
    date: "20 August 2026",
  },
  {
    title: "Monthly Test",
    className: "Class 9 - B",
    date: "22 August 2026",
  },
  {
    title: "Science Test",
    className: "Class 8 - A",
    date: "25 August 2026",
  },
];

export default function ExamsOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Upcoming Exams
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Your upcoming examinations
      </p>

      <div className="mt-4 space-y-3">
        {exams.map((exam) => (
          <div
            key={exam.title}
            className="rounded-lg border border-slate-100 p-3"
          >
            <p className="text-sm font-medium text-slate-800">
              {exam.title}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {exam.className}
            </p>

            <p className="mt-1 text-xs font-medium text-blue-600">
              {exam.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}