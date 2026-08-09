export default function RoutinePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-700 py-20 text-center text-white">

        <h1 className="text-5xl font-bold">
          Class Routine
        </h1>

        <p className="mt-6 text-blue-100">
          Weekly class routine for students.
        </p>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4">Day</th>
                <th className="p-4">09:00</th>
                <th className="p-4">10:00</th>
                <th className="p-4">11:00</th>
                <th className="p-4">12:00</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4 font-semibold">Sunday</td>
                <td className="p-4">Math</td>
                <td className="p-4">English</td>
                <td className="p-4">Science</td>
                <td className="p-4">ICT</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold">Monday</td>
                <td className="p-4">Bangla</td>
                <td className="p-4">Math</td>
                <td className="p-4">Religion</td>
                <td className="p-4">GK</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}