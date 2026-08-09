const stats = [
  {
    title: "Total Students",
    value: "1,250",
    description: "Active students",
  },
  {
    title: "Total Teachers",
    value: "85",
    description: "Active teachers",
  },
  {
    title: "Total Parents",
    value: "980",
    description: "Registered parents",
  },
  {
    title: "Total Staff",
    value: "45",
    description: "Active staff members",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <p className="text-sm font-medium text-gray-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}