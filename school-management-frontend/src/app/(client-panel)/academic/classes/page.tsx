export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-700 py-20 text-center text-white">

        <h1 className="text-5xl font-bold">
          Classes
        </h1>

        <p className="mt-6 text-blue-100">
          Explore our available academic classes.
        </p>

      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

        {[
          "Play",
          "Nursery",
          "KG",
          "Class 1",
          "Class 2",
          "Class 3",
          "Class 4",
          "Class 5",
          "Class 6",
          "Class 7",
          "Class 8",
          "Class 9",
          "Class 10",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white p-8 text-center shadow"
          >
            <h3 className="text-2xl font-bold text-blue-600">
              {item}
            </h3>
          </div>
        ))}

      </section>

    </main>
  );
}