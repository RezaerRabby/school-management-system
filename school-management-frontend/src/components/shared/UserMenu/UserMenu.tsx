"use client";

import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          A
        </div>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Admin
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <button className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Profile
          </button>

          <button className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Settings
          </button>

          <button className="w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}