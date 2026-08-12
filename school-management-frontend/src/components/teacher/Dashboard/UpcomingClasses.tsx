const classes = [
  {
    subject: "Mathematics",
    className: "Class 10 - A",
    time: "09:00 AM",
  },
  {
    subject: "Science",
    className: "Class 8 - A",
    time: "11:00 AM",
  },
  {
    subject: "Mathematics",
    className: "Class 9 - B",
    time: "01:00 PM",
  },
];

export default function UpcomingClasses() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Upcoming Classes
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Today's teaching schedule
      </p>

      <div className="mt-4 space-y-3">
        {classes.map((item) => (
          <div
            key={`${item.className}-${item.time}`}
            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-800">
                {item.subject}
              </p>

              <p className="text-xs text-slate-500">
                {item.className}
              </p>
            </div>

            <span className="text-xs font-medium text-blue-600">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
