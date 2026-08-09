const programs = [
  {
    title: "Primary School",
    description: "Strong foundation with creative learning methods.",
  },
  {
    title: "Secondary School",
    description: "Modern curriculum with practical knowledge.",
  },
  {
    title: "Higher Secondary",
    description: "Science, Business Studies and Humanities.",
  },
];

export default function ProgramCard() {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">
        Academic Programs
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <div
            key={program.title}
            className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-blue-600">
              {program.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}