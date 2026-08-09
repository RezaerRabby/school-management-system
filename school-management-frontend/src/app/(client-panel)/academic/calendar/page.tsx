export default function AcademicCalendarPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-700 py-20 text-center text-white">
        <h1 className="text-5xl font-bold">
          Academic Calendar
        </h1>

        <p className="mt-6 text-lg text-blue-100">
          Important academic events and holidays throughout the year.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="p-4 text-left">Date</th>

                <th className="p-4 text-left">Event</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4">10 Jan</td>
                <td className="p-4">New Academic Session</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">15 Mar</td>
                <td className="p-4">Mid-Term Examination</td>
              </tr>

              <tr>
                <td className="p-4">20 Sep</td>
                <td className="p-4">Final Examination</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}