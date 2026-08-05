


import UserFilter from "@/features/users/components/UserFilter";
import UserTable from "@/features/users/components/UserTable";

export default function UsersPage() {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Users
        </h1>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          + Add User
        </button>
      </div>

      <UserFilter />

      <UserTable />

    </div>
  );
}