export default function AcademicSection() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Admission
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Join our school and build a brighter future with quality
            education and modern learning.
          </p>
        </div>
      </section>

      {/* Admission Information */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Admission Information
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We welcome students who are eager to learn and grow in a
              supportive environment. Our admission process is simple,
              transparent, and student-friendly.
            </p>

            <div className="mt-10 space-y-5">

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-xl font-semibold">
                  Eligibility
                </h3>

                <p className="mt-2 text-gray-600">
                  Students must fulfill the academic requirements for
                  the selected class.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-xl font-semibold">
                  Required Documents
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                  <li>Birth Certificate</li>
                  <li>Previous School Certificate</li>
                  <li>Passport Size Photograph</li>
                  <li>Parent NID Copy</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-xl font-semibold">
                  Admission Schedule
                </h3>

                <p className="mt-2 text-gray-600">
                  Admission applications are accepted throughout the
                  announced admission period.
                </p>
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-3xl font-bold">
              Admission Inquiry
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Student Name"
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />

              <select className="w-full rounded-lg border p-3 outline-none focus:border-blue-600">
                <option>Select Class</option>
                <option>Play</option>
                <option>Nursery</option>
                <option>Class One</option>
                <option>Class Two</option>
                <option>Class Three</option>
                <option>Class Four</option>
                <option>Class Five</option>
              </select>

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Admission Process
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">

            <div className="rounded-xl bg-gray-100 p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-blue-600">
                1
              </div>

              <h3 className="font-semibold">
                Apply
              </h3>

              <p className="mt-3 text-gray-600">
                Fill out the admission application.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-blue-600">
                2
              </div>

              <h3 className="font-semibold">
                Verification
              </h3>

              <p className="mt-3 text-gray-600">
                Submit the required documents.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-blue-600">
                3
              </div>

              <h3 className="font-semibold">
                Interview
              </h3>

              <p className="mt-3 text-gray-600">
                Attend the admission interview.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-blue-600">
                4
              </div>

              <h3 className="font-semibold">
                Confirmation
              </h3>

              <p className="mt-3 text-gray-600">
                Complete admission and start classes.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}