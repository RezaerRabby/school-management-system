
export default function AcademicSection() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Academic
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Providing quality education through a modern curriculum,
            experienced teachers, and a student-centered learning
            environment.
          </p>

        </div>
      </section>

      {/* Academic Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Academic Excellence
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our academic program is designed to help students develop
              knowledge, creativity, leadership, and critical thinking.
              We provide a balanced curriculum that combines classroom
              learning with practical activities.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">

              <li>✅ Modern Curriculum</li>

              <li>✅ Smart Classrooms</li>

              <li>✅ Qualified Teachers</li>

              <li>✅ Computer Laboratory</li>

              <li>✅ Science Laboratory</li>

              <li>✅ Library Facilities</li>

            </ul>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <div className="flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100">

              <p className="text-lg text-gray-500">
                Academic Image
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Classes */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Academic Levels
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                Play
              </h3>

              <p className="mt-3 text-gray-600">
                Early childhood learning.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
              <h3 className="text-2xl font-bold text-green-600">
                Primary
              </h3>

              <p className="mt-3 text-gray-600">
                Class One to Five.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
              <h3 className="text-2xl font-bold text-purple-600">
                Secondary
              </h3>

              <p className="mt-3 text-gray-600">
                Class Six to Ten.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 text-center shadow">
              <h3 className="text-2xl font-bold text-red-600">
                Higher Secondary
              </h3>

              <p className="mt-3 text-gray-600">
                Class Eleven & Twelve.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Academic Facilities */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Academic Facilities
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-white p-8 shadow">

              <h3 className="text-xl font-bold">
                Smart Classroom
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Digital learning environment with multimedia support.
              </p>

            </div>

            <div className="rounded-xl bg-white p-8 shadow">

              <h3 className="text-xl font-bold">
                Science Lab
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Practical science education with modern equipment.
              </p>

            </div>

            <div className="rounded-xl bg-white p-8 shadow">

              <h3 className="text-xl font-bold">
                Computer Lab
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Hands-on computer education and programming practice.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Start Your Academic Journey Today
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Become a part of our learning community and build a bright
            future with us.
          </p>

          <button className="mt-10 rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 hover:bg-gray-100">
            Apply for Admission
          </button>

        </div>

      </section>

    </main>
  );
}