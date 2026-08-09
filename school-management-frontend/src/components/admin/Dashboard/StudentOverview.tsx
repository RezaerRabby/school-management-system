const studentData = [
  {
    label: "Total Students",
    value: "1,250",
  },
  {
    label: "Male Students",
    value: "680",
  },
  {
    label: "Female Students",
    value: "570",
  },
];

export default function StudentOverview() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Student Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current student statistics
          </p>
        </div>

        <span className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600">
          Students
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {studentData.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
          >
            <span className="text-gray-600">
              {item.label}
            </span>

            <span className="font-semibold text-gray-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}