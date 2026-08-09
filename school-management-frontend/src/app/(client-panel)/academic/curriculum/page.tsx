export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-700 py-20 text-center text-white">

        <h1 className="text-5xl font-bold">
          Curriculum
        </h1>

        <p className="mt-6 text-blue-100">
          Modern curriculum designed for student success.
        </p>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Primary
            </h2>

            <p className="mt-4 text-gray-600">
              Foundation learning with activity-based education.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Secondary
            </h2>

            <p className="mt-4 text-gray-600">
              Science, Arts and Commerce curriculum.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              Higher Secondary
            </h2>

            <p className="mt-4 text-gray-600">
              University preparation with practical learning.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}