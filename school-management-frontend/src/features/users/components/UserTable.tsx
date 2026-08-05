"use client";

import UserActions from "./UserActions";

interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
}

const users: User[] = [
  {
    id: 1,
    fullName: "Mahir Hasan",
    email: "mahir@gmail.com",
    phone: "01810000001",
    role: "ADMIN",
    isActive: true,
  },
  {
    id: 2,
    fullName: "Rakib Hossain",
    email: "rakib@gmail.com",
    phone: "01810000002",
    role: "TEACHER",
    isActive: true,
  },
  {
    id: 3,
    fullName: "Sabbir Ahmed",
    email: "sabbir@gmail.com",
    phone: "01810000003",
    role: "STUDENT",
    isActive: false,
  },
];

export default function UserTable() {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="px-5 py-4 text-left">#</th>

            <th className="px-5 py-4 text-left">
              Full Name
            </th>

            <th className="px-5 py-4 text-left">
              Email
            </th>

            <th className="px-5 py-4 text-left">
              Phone
            </th>

            <th className="px-5 py-4 text-left">
              Role
            </th>

            <th className="px-5 py-4 text-left">
              Status
            </th>

            <th className="px-5 py-4 text-center">
              Actions
            </th>
          </tr>

        </thead>

        <tbody>

          {users.map((user, index) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-5 py-4">
                {index + 1}
              </td>

              <td className="px-5 py-4 font-medium">
                {user.fullName}
              </td>

              <td className="px-5 py-4">
                {user.email}
              </td>

              <td className="px-5 py-4">
                {user.phone}
              </td>

              <td className="px-5 py-4">
                {user.role}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm text-white ${
                    user.isActive
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="px-5 py-4 text-center">
                <UserActions
                  onEdit={() => console.log("Edit", user.id)}
                  onDelete={() => console.log("Delete", user.id)}
                />
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}