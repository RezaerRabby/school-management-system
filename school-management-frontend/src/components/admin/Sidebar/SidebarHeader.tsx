import Link from "next/link";

export default function SidebarHeader() {
  return (
    <div className="border-b border-gray-200 px-6 py-5">
      <Link href="/admin/dashboard" className="block">
        <h1 className="text-xl font-bold text-blue-600">
          School Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Admin Panel
        </p>
      </Link>
    </div>
  );
}