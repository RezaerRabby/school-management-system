"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  UserRound,
  ClipboardCheck,
  CalendarDays,
  ClipboardList,
  Megaphone,
  BookOpen,
  WalletCards,
  Bell,
  Settings,
  CircleUserRound,
  ChevronDown,
  ChevronUp,
  Building2,
  UsersRound,
} from "lucide-react";

interface MenuItem {
  label: string;
  href?: string;
  icon: React.ElementType;
  children?: {
    label: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/staff/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "My Profile",
    href: "/staff/profile",
    icon: CircleUserRound,
  },

  {
    label: "Attendance",
    href: "/staff/attendance",
    icon: ClipboardCheck,
  },

  {
    label: "Leave",
    icon: CalendarDays,
    children: [
      {
        label: "Leave Requests",
        href: "/staff/leave",
      },
      {
        label: "Apply Leave",
        href: "/staff/leave/apply",
      },
    ],
  },

  {
    label: "Tasks",
    icon: ClipboardList,
    children: [
      {
        label: "My Tasks",
        href: "/staff/tasks",
      },
      {
        label: "Completed Tasks",
        href: "/staff/tasks/completed",
      },
    ],
  },

  {
    label: "Notices",
    href: "/staff/notices",
    icon: Megaphone,
  },

  {
    label: "Events",
    href: "/staff/events",
    icon: CalendarDays,
  },

  {
    label: "Study Materials",
    href: "/staff/study-materials",
    icon: BookOpen,
  },

  {
    label: "Salary",
    href: "/staff/salary",
    icon: WalletCards,
  },

  {
    label: "Messages",
    href: "/staff/messages",
    icon: Bell,
  },

  {
    label: "Staff Directory",
    href: "/staff/directory",
    icon: UsersRound,
  },

  {
    label: "Settings",
    href: "/staff/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>("Leave");

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[240px] border-r border-slate-200 bg-white">
      {/* Header / Logo */}
      <div className="flex h-[54px] items-center border-b border-slate-200 px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <Building2 size={18} className="text-white" />
        </div>

        <div className="ml-3">
          <h1 className="text-[13px] font-semibold leading-4 text-slate-900">
            School Management
          </h1>

          <p className="text-[11px] leading-4 text-slate-500">
            Staff Panel
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="h-[calc(100vh-54px)] overflow-y-auto px-2 py-3">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive = item.href
              ? pathname === item.href
              : item.children?.some((child) =>
                  pathname.startsWith(child.href)
                );

            const isOpen = openMenu === item.label;

            {/* Dropdown */}
            if (item.children) {
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMenu(isOpen ? null : item.label)
                    }
                    className={`flex h-[38px] w-full items-center rounded-lg px-3 text-[12px] transition ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.8} />

                    <span className="ml-3 flex-1 text-left">
                      {item.label}
                    </span>

                    {isOpen ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="ml-4 border-l border-slate-200 pl-3">
                      {item.children.map((child) => {
                        const childActive =
                          pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-md px-3 py-2 text-[12px] transition ${
                              childActive
                                ? "font-medium text-blue-600"
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            {/* Normal Menu */}
            return (
              <Link
                key={item.label}
                href={item.href!}
                className={`flex h-[38px] items-center rounded-lg px-3 text-[12px] transition ${
                  isActive
                    ? "bg-blue-600 font-medium text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon size={16} strokeWidth={1.8} />

                <span className="ml-3">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}