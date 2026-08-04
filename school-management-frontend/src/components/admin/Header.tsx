
"use client";

import {
  Bell,
  LogOut,
  Menu,
  Search,
  Settings,
  UserCircle,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-white">
      <div className="flex h-full items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              School Management System
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-[380px] lg:block">
          <div className="flex items-center rounded-lg border bg-gray-50 px-3">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent px-3 py-2 outline-none"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Notification */}
          <button className="relative rounded-lg p-2 hover:bg-gray-100">
            <Bell size={22} />

            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
          </button>

          {/* Settings */}
          {/* <button className="rounded-lg p-2 hover:bg-gray-100">
            <Settings size={22} />
          </button> */}

          {/* Profile */}
          <div className="flex items-center gap-3 border-l pl-4">
            <UserCircle size={42} className="text-gray-600" />

            <div className="hidden text-left md:block">
              <p className="font-semibold text-gray-800">
                Rezaer Rabby
              </p>

              <p className="text-sm text-gray-500">
                Administrator
              </p>
            </div>
          </div>

          {/* Logout */}
          {/* <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
            <LogOut size={18} />
            Logout
          </button> */}

        </div>
      </div>
    </header>
  );
}
