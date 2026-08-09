import Link from "next/link";

export default function HeroContent() {
  return (
    <div>
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        Welcome to Our School
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
        Build Your Future
        <br />
        With Quality Education
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        We provide modern education, experienced teachers,
        smart classrooms, and a friendly learning environment.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/admission"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Apply Now
        </Link>

        <Link
          href="/about"
          className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}