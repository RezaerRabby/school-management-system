interface NoticePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoticeDetailsPage({
  params,
}: NoticePageProps) {
  const { id } = await params;

  // পরে Backend API দিয়ে replace করবে
  const notice = {
    id,
    title: "Annual Examination Schedule 2026",
    date: "10 August 2026",
    category: "Academic",
    author: "School Administration",
    description: `
The Annual Examination 2026 will begin from 15 September 2026.

All students are requested to collect their admit cards before the examination date.
Students must arrive at least 30 minutes before the exam starts.

For any questions, please contact the academic office.
    `,
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            {notice.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            {notice.title}
          </h1>

          <p className="mt-4 text-blue-100">
            Published on {notice.date}
          </p>

        </div>
      </section>

      {/* Notice Details */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <div className="border-b pb-6">

            <p className="text-sm text-gray-500">
              Notice ID: #{notice.id}
            </p>

            <p className="mt-2 text-gray-600">
              Published By:{" "}
              <span className="font-semibold">
                {notice.author}
              </span>
            </p>

          </div>

          <div className="mt-8 whitespace-pre-line leading-8 text-gray-700">
            {notice.description}
          </div>

        </div>

      </section>

    </main>
  );
}

