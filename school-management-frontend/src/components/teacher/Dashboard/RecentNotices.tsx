const notices = [
  {
    title: "Teachers meeting announcement",
    date: "10 August 2026",
  },
  {
    title: "Mid term examination schedule",
    date: "8 August 2026",
  },
  {
    title: "Training program notice",
    date: "5 August 2026",
  },
];

export default function RecentNotices() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Recent Notices
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Latest school announcements
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {notices.map((notice) => (
          <div
            key={notice.title}
            className="rounded-lg border border-slate-100 p-3"
          >
            <p className="text-sm font-medium text-slate-800">
              {notice.title}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {notice.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}