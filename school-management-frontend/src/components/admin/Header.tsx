"use client";

import { Bell, LogOut, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">

      {/* Left Side */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Admin Panel
        </h2>

        <p className="text-sm text-gray-500">
          School Management System
        </p>
      </div>


      {/* Right Side */}
      <div className="flex items-center gap-5">


        {/* Notification */}
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>



        {/* Profile */}
        <div className="flex items-center gap-3">

          <UserCircle
            size={40}
            className="text-gray-600"
          />


          <div>
            <p className="font-medium text-gray-800">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>


        </div>



        {/* Logout */}
        <button
          className="
          flex items-center gap-2
          bg-red-500 
          text-white
          px-4
          py-2
          rounded-lg
          hover:bg-red-600
          "
        >

          <LogOut size={18}/>

          Logout

        </button>


      </div>

    </header>
  );
}

