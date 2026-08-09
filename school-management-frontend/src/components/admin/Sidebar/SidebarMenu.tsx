"use client";

import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },

  {
    label: "Students",
    children: [
      {
        label: "All Students",
        href: "/admin/students",
      },
      {
        label: "Add Student",
        href: "/admin/students/create",
      },
    ],
  },

  {
    label: "Teachers",
    children: [
      {
        label: "All Teachers",
        href: "/admin/teachers",
      },
      {
        label: "Add Teacher",
        href: "/admin/teachers/create",
      },
    ],
  },

  {
    label: "Parents",
    href: "/admin/parents",
  },

  {
    label: "Staff",
    href: "/admin/staff",
  },

  {
    label: "Academic",
    children: [
      {
        label: "Classes",
        href: "/admin/classes",
      },
      {
        label: "Sections",
        href: "/admin/sections",
      },
      {
        label: "Subjects",
        href: "/admin/subjects",
      },
      {
        label: "Routines",
        href: "/admin/routines",
      },
    ],
  },

  {
    label: "Attendance",
    href: "/admin/attendance",
  },

  {
    label: "Exams",
    href: "/admin/exams",
  },

  {
    label: "Results",
    href: "/admin/results",
  },

  {
    label: "Notices",
    href: "/admin/notices",
  },

  {
    label: "Events",
    href: "/admin/events",
  },

  {
    label: "Admissions",
    href: "/admin/admissions",
  },

  {
    label: "Fees",
    href: "/admin/fees",
  },

  {
    label: "Library",
    href: "/admin/library",
  },

  {
    label: "Transport",
    href: "/admin/transport",
  },

  {
    label: "Gallery",
    href: "/admin/gallery",
  },

  {
    label: "Settings",
    href: "/admin/settings",
  },

  {
    label: "Profile",
    href: "/admin/profile",
  },
];

export default function SidebarMenu() {
  return (
    <nav className="p-4">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.label}
            label={item.label}
            href={item.href}
            children={item.children}
          />
        ))}
      </ul>
    </nav>
  );
}