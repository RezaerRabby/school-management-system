const facilities = [
  "Smart Classroom",
  "Science Laboratory",
  "Computer Laboratory",
  "Library",
  "Multimedia Learning",
  "Sports Facilities",
];

export default function Facilities() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Academic Facilities
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {facilities.map((facility) => (
            <div
              key={facility}
              className="rounded-xl bg-white p-8 shadow"
            >
              <h3 className="text-xl font-semibold">
                {facility}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}