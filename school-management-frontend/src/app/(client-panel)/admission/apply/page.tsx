export default function ApplyNowPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Apply for Admission
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Complete the application form below to begin your admission
            process.
          </p>

        </div>
      </section>

      {/* Application Form */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <h2 className="text-3xl font-bold text-gray-900">
            Student Information
          </h2>

          <form className="mt-8 space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-medium">
                  Student Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Date of Birth
                </label>

                <input
                  type="date"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-medium">
                  Gender
                </label>

                <select className="w-full rounded-lg border p-3 outline-none focus:border-blue-600">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Class
                </label>

                <select className="w-full rounded-lg border p-3 outline-none focus:border-blue-600">
                  <option>Select Class</option>
                  <option>Play</option>
                  <option>Nursery</option>
                  <option>KG</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                </select>
              </div>

            </div>

            <div>
              <label className="mb-2 block font-medium">
                Address
              </label>

              <textarea
                rows={4}
                placeholder="Enter your address"
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />
            </div>

            <hr />

            <h2 className="text-3xl font-bold text-gray-900">
              Parent Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-medium">
                  Parent Name
                </label>

                <input
                  type="text"
                  placeholder="Parent name"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+8801XXXXXXXXX"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

            </div>

            <div>
              <label className="mb-2 block font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
              />
            </div>

            <div className="pt-4">

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Application
              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}