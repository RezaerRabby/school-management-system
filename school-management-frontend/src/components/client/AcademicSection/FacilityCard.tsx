const facilities = [
  "Smart Classrooms",
  "Computer Lab",
  "Science Laboratory",
  "Modern Library",
  "Sports Facilities",
  "Digital Learning",
];

export default function FacilityCard() {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">
        Academic Facilities
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {facilities.map((facility) => (
          <div
            key={facility}
            className="rounded-2xl border bg-gray-50 p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {facility}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}