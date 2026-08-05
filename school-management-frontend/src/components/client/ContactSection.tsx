export default function ContactSection() {
  return (
   <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            We'd love to hear from you. Feel free to contact us for
            admissions, academic information, or any general inquiry.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-2xl bg-white p-10 shadow">

            <h2 className="text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Our team is always ready to assist students, parents,
              and visitors. You can visit our campus or contact us
              using the information below.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h3 className="font-semibold text-blue-600">
                  📍 Address
                </h3>

                <p className="mt-2 text-gray-600">
                  Mirpur-10, Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  📞 Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  +880 1712-345678
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  📧 Email
                </h3>

                <p className="mt-2 text-gray-600">
                  info@school.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  🕒 Office Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Saturday - Thursday
                </p>

                <p className="text-gray-600">
                  8:00 AM - 4:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-10 shadow">

            <h2 className="text-3xl font-bold text-gray-900">
              Send Message
            </h2>

            <form className="mt-8 space-y-6">

              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                />
              </div>

              <button
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex h-[450px] items-center justify-center rounded-2xl bg-gray-300 text-2xl font-semibold text-gray-600">
            Google Map Here
          </div>

        </div>

      </section>

    </main>
  );
}