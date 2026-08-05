"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            Welcome to School Management System
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            Smart School
            <br />
            Better Education
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Manage students, teachers, attendance, examinations, results,
            fees, notices and much more from one powerful platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/admission"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
            >
              Apply Admission
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-bold">1500+</h2>
              <p className="text-blue-100">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">120+</h2>
              <p className="text-blue-100">Teachers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-blue-100">Classrooms</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">25+</h2>
              <p className="text-blue-100">Years</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex w-full max-w-xl items-center justify-center">
          <div className="w-full rounded-3xl bg-white p-10 shadow-2xl">
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-100 p-20 text-center">
              <p className="text-lg font-semibold text-gray-500">
                School Banner / Hero Image
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Replace with your school image
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}