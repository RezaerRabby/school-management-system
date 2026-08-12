const results = [
  { subject: "Mathematics", marks: "92%" },
  { subject: "English", marks: "88%" },
  { subject: "Science", marks: "85%" },
  { subject: "Bangla", marks: "82%" },
];

export default function ResultsOverview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Results Overview
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Latest academic performance
      </p>

      <div className="mt-4">
        {results.map((result) => (
          <div
            key={result.subject}
            className="flex justify-between border-b border-slate-100 py-3 last:border-0"
          >
            <span className="text-sm text-slate-600">
              {result.subject}
            </span>

            <span className="text-sm font-semibold">
              {result.marks}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}