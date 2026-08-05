export default function EventPage() {
     const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "15 September 2026",
      location: "School Playground",
      description:
        "Students will participate in different sports competitions and cultural activities.",
    },
    {
      id: 2,
      title: "Science Fair 2026",
      date: "10 October 2026",
      location: "School Auditorium",
      description:
        "Students will present innovative science projects and experiments.",
    },
    {
      id: 3,
      title: "Cultural Program",
      date: "16 December 2026",
      location: "School Campus",
      description:
        "Celebrate Victory Day with songs, dance, drama, and cultural performances.",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "20 August 2026",
      location: "Conference Hall",
      description:
        "Parents and teachers will discuss students' academic progress.",
    },
    {
      id: 5,
      title: "Annual Picnic",
      date: "05 January 2027",
      location: "National Park",
      description:
        "A fun-filled educational picnic for students, teachers, and staff.",
    },
    {
      id: 6,
      title: "Prize Giving Ceremony",
      date: "25 February 2027",
      location: "School Auditorium",
      description:
        "Awards and certificates will be distributed to outstanding students.",
    },
  ];

  return (

    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            School Events
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Discover upcoming events, competitions, celebrations, and
            activities happening at our school.
          </p>

        </div>
      </section>

      {/* Event List */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image Placeholder */}
              <div className="flex h-52 items-center justify-center bg-gray-200">
                <span className="text-lg text-gray-500">
                  Event Image
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {event.date}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  {event.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  📍 {event.location}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {event.description}
                </p>

                <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Stay Connected With School Activities
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Join our educational, cultural, and sports events to make
            learning more enjoyable and memorable.
          </p>

        </div>

      </section>

    </main>

  );
}