"use client";

interface UserCardProps {
  fullName: string;
  email: string;
  role: string;
}

export default function UserCard({
  fullName,
  email,
  role,
}: UserCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="text-lg font-bold">
        {fullName}
      </h3>

      <p className="mt-2 text-gray-600">
        {email}
      </p>

      <span className="mt-4 inline-block rounded bg-blue-100 px-3 py-1 text-sm text-blue-700">
        {role}
      </span>

    </div>
  );
}