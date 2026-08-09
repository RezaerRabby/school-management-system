


import Link from "next/link";

interface TeacherCardProps {
  id: string;
  name: string;
  designation: string;
  subject: string;
  experience: string;
  image?: string;
}

export default function TeacherCard({
  id,
  name,
  designation,
  subject,
  experience,
}: TeacherCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-64 items-center justify-center bg-gray-100">
        <span className="text-7xl font-bold text-blue-600">
          {name.charAt(0)}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 font-semibold text-blue-600">
          {designation}
        </p>

        <p className="mt-2 text-gray-600">
          Subject: {subject}
        </p>

        <p className="mt-1 text-gray-500">
          {experience}
        </p>

        <Link
          href={`/teachers/${id}`}
          className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          View Profile
        </Link>

      </div>

    </div>
  );
}