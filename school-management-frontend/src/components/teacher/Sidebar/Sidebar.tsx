"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  UserRound,
  UsersRound,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Megaphone,
  FileText,
  Bell,
  Settings,
  ChevronDown,
  ChevronUp,
  Building2,
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
    href: "/teacher/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "My Profile",
    href: "/teacher/profile",
    icon: UserRound,
  },

  {
    label: "My Classes",
    icon: BookOpen,
    children: [
      {
        label: "Class List",
        href: "/teacher/classes",
      },
      {
        label: "Class Schedule",
        href: "/teacher/classes/schedule",
      },
    ],
  },

  {
    label: "Students",
    href: "/teacher/students",
    icon: UsersRound,
  },

  {
    label: "Attendance",
    icon: ClipboardCheck,
    children: [
      {
        label: "Take Attendance",
        href: "/teacher/attendance/take",
      },
      {
        label: "Attendance Report",
        href: "/teacher/attendance",
      },
    ],
  },

  {
    label: "Assignments",
    icon: ClipboardList,
    children: [
      {
        label: "All Assignments",
        href: "/teacher/assignments",
      },
      {
        label: "Create Assignment",
        href: "/teacher/assignments/create",
      },
      {
        label: "Submissions",
        href: "/teacher/assignments/submissions",
      },
    ],
  },

  {
    label: "Exams",
    icon: GraduationCap,
    children: [
      {
        label: "Exam Schedule",
        href: "/teacher/exams",
      },
      {
        label: "Marks",
        href: "/teacher/exams/marks",
      },
      {
        label: "Results",
        href: "/teacher/exams/results",
      },
    ],
  },

  {
    label: "Study Materials",
    href: "/teacher/study-materials",
    icon: BookOpen,
  },

  {
    label: "Routine",
    href: "/teacher/routine",
    icon: CalendarDays,
  },

  {
    label: "Leave",
    href: "/teacher/leave",
    icon: CalendarDays,
  },

  {
    label: "Notices",
    href: "/teacher/notices",
    icon: Megaphone,
  },

  {
    label: "Events",
    href: "/teacher/events",
    icon: CalendarDays,
  },

  {
    label: "Reports",
    href: "/teacher/reports",
    icon: FileText,
  },

  {
    label: "Notifications",
    href: "/teacher/notifications",
    icon: Bell,
  },

  {
    label: "Settings",
    href: "/teacher/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>(
    "My Classes"
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[240px] border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-[54px] items-center border-b border-slate-200 px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <Building2 size={18} className="text-white" />
        </div>

        <div className="ml-3">
          <h1 className="text-[13px] font-semibold leading-4 text-slate-900">
            School Management
          </h1>

          <p className="text-[11px] leading-4 text-slate-500">
            Teacher Panel
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