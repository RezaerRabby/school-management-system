// "use client";

// import Link from "next/link";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Admission", href: "/admission" },
//   { name: "Academic", href: "/academic" },
//   { name: "Teachers", href: "/teachers" },
//   { name: "Notice", href: "/notices" },
//   { name: "Events", href: "/events" },
//   { name: "Gallery", href: "/gallery" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 bg-white shadow">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-600">
//           Roventix School
//         </Link>

//         {/* Menu */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="font-medium text-gray-700 transition hover:text-blue-600"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Side */}
//         <div className="flex items-center gap-3">
//           <Link
//             href="/results/check"
//             className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
//           >
//             Result
//           </Link>

//           <Link
//             href="/admin/login"
//             className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
//           >
//             Admin Login
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admission", href: "/admission" },
  { name: "Academic", href: "/academic" },
  { name: "Teachers", href: "/teachers" },
  { name: "Notice", href: "/notices" },          // ✅ notice
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Roventix School
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-8 md:flex">
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

        {/* Right */}
        <div className="flex items-center gap-3">

          <Link
            href="/results/check"     // ✅ result-check
            className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Result
          </Link>

          <Link
            href="/admin/login"      // ✅ admin login
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Login
          </Link>

        </div>

      </div>
    </header>
  );
}