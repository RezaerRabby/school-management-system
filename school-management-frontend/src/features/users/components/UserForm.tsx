"use client";

export default function UserForm() {
  return (
    <form className="space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-lg border p-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        placeholder="Phone"
        className="w-full rounded-lg border p-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-lg border p-3"
      />

      <select className="w-full rounded-lg border p-3">
        <option>ADMIN</option>
        <option>TEACHER</option>
        <option>STUDENT</option>
        <option>PARENT</option>
        <option>STAFF</option>
      </select>

      <button className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
        Save User
      </button>

    </form>
  );
}