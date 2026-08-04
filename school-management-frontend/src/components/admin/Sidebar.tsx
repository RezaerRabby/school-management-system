"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    name: "Users",
    path: "/admin/users",
  },
  {
    name: "Students",
    path: "/admin/students",
  },
  {
    name: "Teachers",
    path: "/admin/teachers",
  },
  {
    name: "Parents",
    path: "/admin/parents",
  },
  {
    name: "Attendance",
    path: "/admin/attendance",
  },
  {
    name: "Exams",
    path: "/admin/exams",
  },
  {
    name: "Results",
    path: "/admin/results",
  },
  {
    name: "Fees",
    path: "/admin/fees",
  },
  {
    name: "Settings",
    path: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white">

      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <h1 className="text-xl font-bold first-letter:uppercase flex text-center">
          School Management System
        </h1>
      </div>


      {/* Menu */}
      <nav className="p-4 space-y-2">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`
              block px-4 py-3 rounded-lg transition
              ${
                pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }
            `}
          >
            {item.name}
          </Link>
        ))}

      </nav>


       {/* Logout */}
          <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600 ml-4">
            <LogOut size={18} />
            Logout
          </button>


    </aside>
  );
}