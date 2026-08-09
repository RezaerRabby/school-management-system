import TeacherDetails from "./TeacherDetails";

export default function TeacherSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Our Faculty
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Meet Our Professional Teachers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our teachers are experienced, passionate, and committed to
            providing quality education. They inspire students to learn,
            grow, and achieve their full potential.
          </p>
        </div>

        <TeacherDetails />

      </div>
    </section>
  );
}