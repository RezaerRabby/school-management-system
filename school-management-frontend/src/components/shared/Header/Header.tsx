

// "use client";

// import { ChevronDown, Moon } from "lucide-react";

// export default function Header() {
//   return (
//     <header className="fixed left-[240px] right-0 top-0 z-30 h-[54px] border-b border-slate-200 bg-white">
//       <div className="flex h-full items-center justify-between px-5">
//         {/* Breadcrumb */}
//         <div className="flex items-center gap-3 text-[12px]">
//           <span className="text-slate-500">Admin</span>

//           <span className="text-slate-300">›</span>

//           <span className="font-semibold text-slate-800">
//             Dashboard
//           </span>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4">
//           {/* Theme */}
//           <button
//             type="button"
//             className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
//           >
//             <Moon size={16} />
//           </button>

//           {/* User */}
//           <button
//             type="button"
//             className="flex items-center gap-2"
//           >
//             <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-[12px] font-medium text-white">
//               A
//             </div>

//             <div className="text-left">
//               <p className="text-[12px] font-semibold leading-4 text-slate-800">
//                 Admin
//               </p>

//               <p className="text-[10px] leading-3 text-slate-500">
//                 Administrator
//               </p>
//             </div>

//             <ChevronDown
//               size={14}
//               className="ml-2 text-slate-500"
//             />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import {
  ChevronDown,
  Moon,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500">
            Admin
          </span>

          <span className="text-slate-300">
            ›
          </span>

          <span className="font-semibold text-slate-800">
            Dashboard
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
          >
            <Moon size={16} />
          </button>

          {/* User Menu */}
          <div className="relative">

            {/* User Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-slate-50"
            >

              {/* Avatar */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-[12px] font-medium text-white">
                A
              </div>

              {/* User Info */}
              <div className="text-left">
                <p className="text-[12px] font-semibold leading-4 text-slate-800">
                  Admin
                </p>

                <p className="text-[10px] leading-3 text-slate-500">
                  Administrator
                </p>
              </div>

              {/* Arrow */}
              <ChevronDown
                size={14}
                className={`ml-2 text-slate-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">

                {/* User Info */}
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="text-sm font-semibold text-slate-800">
                    Admin
                  </p>

                  <p className="text-xs text-slate-500">
                    Administrator
                  </p>
                </div>

                {/* Menu Items */}
                <div className="p-1.5">

                  {/* Edit Profile */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = "/profile";
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                  >
                    <User
                      size={16}
                      className="text-slate-500"
                    />

                    <span>
                      Edit Profile
                    </span>
                  </button>

                  {/* Account Settings */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href = "/settings";
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                  >
                    <Settings
                      size={16}
                      className="text-slate-500"
                    />

                    <span>
                      Account Settings
                    </span>
                  </button>

                  {/* Divider */}
                  <div className="my-1 border-t border-slate-100" />

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.href = "/login";
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut size={16} />

                    <span>
                      Logout
                    </span>
                  </button>

                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}
