import Link from "next/link";

export default function AdmissionBanner() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-16 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
          Admission 2026
        </span>

        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          Admission is Now Open
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Join our school and experience quality education, modern
          classrooms, experienced teachers, and a friendly learning
          environment.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/admission/apply"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Apply Now
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}