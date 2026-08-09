const teacherData = [
  {
    label: "Total Teachers",
    value: "85",
  },
  {
    label: "Male Teachers",
    value: "48",
  },
  {
    label: "Female Teachers",
    value: "37",
  },
];

export default function TeacherOverview() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Teacher Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current teacher statistics
          </p>
        </div>

        <span className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-600">
          Teachers
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {teacherData.map((item) => (
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