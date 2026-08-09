const attendance = [
  {
    label: "Present",
    value: "92%",
  },
  {
    label: "Absent",
    value: "5%",
  },
  {
    label: "Late",
    value: "3%",
  },
];

export default function AttendanceOverview() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Attendance Overview
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Today's school attendance
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {attendance.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">
                {item.label}
              </span>

              <span className="text-sm font-semibold text-gray-900">
                {item.value}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{
                  width: item.value,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}