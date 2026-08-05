"use client";

export default function UserFilter() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <input
        type="text"
        placeholder="Search user..."
        className="w-72 rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select className="rounded-lg border px-4 py-2">
        <option>All Roles</option>
        <option>ADMIN</option>
        <option>TEACHER</option>
        <option>STUDENT</option>
        <option>PARENT</option>
        <option>STAFF</option>
      </select>

      <select className="rounded-lg border px-4 py-2">
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>
  );
}