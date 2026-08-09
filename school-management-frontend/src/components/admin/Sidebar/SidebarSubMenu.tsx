import Link from "next/link";

interface SubMenuItem {
  label: string;
  href: string;
}

interface SidebarSubMenuProps {
  items: SubMenuItem[];
}

export default function SidebarSubMenu({
  items,
}: SidebarSubMenuProps) {
  return (
    <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}