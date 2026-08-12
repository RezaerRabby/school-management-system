const events = [
  {
    title: "Staff Meeting",
    date: "15 August 2026",
  },
  {
    title: "Annual Sports Day",
    date: "20 August 2026",
  },
  {
    title: "Training Program",
    date: "25 August 2026",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Upcoming Events
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Important upcoming events
      </p>

      <div className="mt-4 space-y-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-lg border border-slate-100 p-3"
          >
            <p className="text-sm font-medium text-slate-800">
              {event.title}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {event.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}