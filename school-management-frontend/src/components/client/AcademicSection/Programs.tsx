import Link from "next/link";

const programs = [
  {
    title: "Academic Calendar",
    description: "View holidays, exams and important dates.",
    href: "/academic/calendar",
  },
  {
    title: "Classes",
    description: "Browse all academic classes.",
    href: "/academic/classes",
  },
  {
    title: "Curriculum",
    description: "Explore our learning curriculum.",
    href: "/academic/curriculum",
  },
  {
    title: "Class Routine",
    description: "Weekly class schedules.",
    href: "/academic/routine",
  },
];

export default function Programs() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Academic Programs
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl bg-gray-50 p-8 shadow"
            >

              <h3 className="text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {program.description}
              </p>

              <Link
                href={program.href}
                className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
              >
                Learn More
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}