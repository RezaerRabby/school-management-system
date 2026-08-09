import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-700 py-20 text-white">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Start Your Academic Journey
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Join our school and experience quality education with modern
          facilities and experienced teachers.
        </p>

        <Link
          href="/admission/apply"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 hover:bg-gray-100"
        >
          Apply Now
        </Link>

      </div>

    </section>
  );
}