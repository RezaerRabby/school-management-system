import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* School Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              School ERP
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              A modern School Management System for students,
              teachers, parents and administrators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/admission">
                  Admission
                </Link>
              </li>

              <li>
                <Link href="/teachers">
                  Teachers
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Student */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Student Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/results/check">
                  Result Check
                </Link>
              </li>

              <li>
                <Link href="/notice">
                  Notice
                </Link>
              </li>

              <li>
                <Link href="/events">
                  Events
                </Link>
              </li>

              <li>
                <Link href="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>
                📍 Mirpur-10, Dhaka, Bangladesh
              </p>

              <p>
                📞 +880 1712-345678
              </p>

              <p>
                ✉️ info@school.com
              </p>

              <p>
                🌐 www.school.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col gap-3 text-center text-gray-400 md:flex-row md:justify-between">

          <p>
            © {new Date().getFullYear()} School Management System.
            All Rights Reserved.
          </p>

          <p>
            Developed with Roventix.com
          </p>

        </div>

      </div>
    </footer>
  );
}