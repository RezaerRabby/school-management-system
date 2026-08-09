// "use client";

// import SidebarHeader from "./SidebarHeader";
// import SidebarMenu from "./SidebarMenu";
// import SidebarFooter from "./SidebarFooter";

// export default function Sidebar() {
//   return (
//     <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">
//       <SidebarHeader />

//       <div className="flex-1 overflow-y-auto">
//         <SidebarMenu />
//       </div>

//       <SidebarFooter />
//     </aside>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  UsersRound,
  GraduationCap,
  UserRound,
  BriefcaseBusiness,
  School,
  ClipboardCheck,
  FileText,
  BarChart3,
  Megaphone,
  CalendarDays,
  Image,
  UserPlus,
  WalletCards,
  Library,
  Bus,
  Settings,
  CircleUserRound,
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
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "Students",
    icon: UsersRound,
    children: [
      {
        label: "All Students",
        href: "/students",
      },
      {
        label: "Add Student",
        href: "/students/add",
      },
    ],
  },

  {
    label: "Teachers",
    icon: GraduationCap,
    children: [
      {
        label: "All Teachers",
        href: "/teachers",
      },
      {
        label: "Add Teacher",
        href: "/teachers/add",
      },
    ],
  },

  {
    label: "Parents",
    icon: UserRound,
    children: [
      {
        label: "All Parents",
        href: "/parents",
      },
      {
        label: "Add Parent",
        href: "/parents/add",
      },
    ],
  },

  {
    label: "Staff",
    icon: BriefcaseBusiness,
    children: [
      {
        label: "All Staff",
        href: "/staff",
      },
      {
        label: "Add Staff",
        href: "/staff/add",
      },
    ],
  },

  {
    label: "Academic",
    icon: School,
    children: [
      {
        label: "Classes",
        href: "/academic/classes",
      },
      {
        label: "Subjects",
        href: "/academic/subjects",
      },
      {
        label: "Class Routine",
        href: "/academic/routine",
      },
    ],
  },

  {
    label: "Attendance",
    href: "/attendance",
    icon: ClipboardCheck,
  },

  {
    label: "Exams",
    href: "/exams",
    icon: FileText,
  },

  {
    label: "Results",
    href: "/results",
    icon: BarChart3,
  },

  {
    label: "Notices",
    href: "/notices",
    icon: Megaphone,
  },

  {
    label: "Events",
    href: "/events",
    icon: CalendarDays,
  },

  {
    label: "Gallery",
    href: "/gallery",
    icon: Image,
  },

  {
    label: "Admissions",
    href: "/admissions",
    icon: UserPlus,
  },

  {
    label: "Fees",
    href: "/fees",
    icon: WalletCards,
  },

  {
    label: "Library",
    href: "/library",
    icon: Library,
  },

  {
    label: "Transport",
    href: "/transport",
    icon: Bus,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },

  {
    label: "Profile",
    href: "/profile",
    icon: CircleUserRound,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>("Students");

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
            Admin Panel
          </p>
        </div>
      </div>

      {/* Menu */}
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
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-md px-3 py-2 text-[12px] ${
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

                <span className="ml-3">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}