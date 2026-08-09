import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admission", href: "/admission" },
  { name: "Academic", href: "/academic" },
  { name: "Teachers", href: "/teachers" },
  { name: "Notice", href: "/notices" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-medium text-gray-700 transition hover:text-blue-600"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}