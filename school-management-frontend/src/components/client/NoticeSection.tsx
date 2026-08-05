export default function NoticeSection() {
   const notices = [
    {
      id: 1,
      title: "Admission Open for Academic Session 2027",
      date: "05 August 2026",
      category: "Admission",
      description:
        "Online admission applications are now open for the new academic session.",
    },
    {
      id: 2,
      title: "Mid-Term Examination Routine Published",
      date: "02 August 2026",
      category: "Examination",
      description:
        "The mid-term examination schedule has been published for all classes.",
    },
    {
      id: 3,
      title: "Independence Day Celebration",
      date: "30 July 2026",
      category: "Event",
      description:
        "Students are requested to participate in the Independence Day program.",
    },
    {
      id: 4,
      title: "Monthly Parent-Teacher Meeting",
      date: "25 July 2026",
      category: "Meeting",
      description:
        "Parents are requested to attend the monthly parent-teacher meeting.",
    },
    {
      id: 5,
      title: "Library Closed for Maintenance",
      date: "20 July 2026",
      category: "Notice",
      description:
        "The school library will remain closed for maintenance this weekend.",
    },
  ];
  return (
   <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            School Notices
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Stay updated with the latest announcements, academic notices,
            examinations, events, and important school information.
          </p>

        </div>
      </section>

      {/* Notice List */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="space-y-8">

          {notices.map((notice) => (
            <div
              key={notice.id}
              className="rounded-2xl bg-white p-8 shadow transition hover:shadow-lg"
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                  <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                    {notice.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    {notice.title}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    {notice.description}
                  </p>

                </div>

                <div className="text-gray-500">
                  {notice.date}
                </div>

              </div>

              <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Read More
              </button>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}