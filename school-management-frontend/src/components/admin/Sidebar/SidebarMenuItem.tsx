"use client";

import Link from "next/link";
import { useState } from "react";
import SidebarSubMenu from "./SidebarSubMenu";

interface SubMenuItem {
  label: string;
  href: string;
}

interface SidebarMenuItemProps {
  label: string;
  href?: string;
  children?: SubMenuItem[];
}

export default function SidebarMenuItem({
  label,
  href,
  children,
}: SidebarMenuItemProps) {
  const [open, setOpen] = useState(false);

  // Normal menu
  if (!children) {
    return (
      <li>
        <Link
          href={href || "#"}
          className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
        >
          {label}
        </Link>
      </li>
    );
  }

  // Dropdown menu
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
      >
        <span>{label}</span>

        <span
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && <SidebarSubMenu items={children} />}
    </li>
  );
}