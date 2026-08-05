"use client";

import { useState } from "react";

type Subject = {
  name: string;
  marks: number;
};

type Result = {
  name: string;
  roll: string;
  className: string;
  exam: string;
  subjects: Subject[];
  grade: string;
  gpa: string;
};

export default function ResultCheckPage() {
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const handleSearch = () => {
    const demoResult: Result = {
      name: "Mahir Hasan",
      roll: "101",
      className: "Class 8",
      exam: "Final Examination 2026",
      subjects: [
        { name: "Bangla", marks: 85 },
        { name: "English", marks: 90 },
        { name: "Mathematics", marks: 95 },
        { name: "Science", marks: 88 },
      ],
      grade: "A+",
      gpa: "5.00",
    };

    if (studentId.trim()) {
      setResult(demoResult);
    } else {
      alert("Please enter your Student ID.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Result Check</h1>
          <p className="mt-4 text-lg text-blue-100">
            Search your examination result using your Student ID or Roll Number.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold">Search Result</h2>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Student ID / Roll Number"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="flex-1 rounded-lg border p-3 outline-none focus:border-blue-600"
            />

            <button
              onClick={handleSearch}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Result */}
      {result && (
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-xl bg-white p-8 shadow">
            <div className="text-center">
              <h2 className="text-3xl font-bold">{result.exam}</h2>

              <p className="mt-4 text-gray-600">
                <strong>Name:</strong> {result.name}
              </p>

              <p className="text-gray-600">
                <strong>Roll:</strong> {result.roll} |{" "}
                <strong>Class:</strong> {result.className}
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border p-3 text-left">Subject</th>
                    <th className="border p-3 text-center">Marks</th>
                  </tr>
                </thead>

                <tbody>
                  {result.subjects.map((subject) => (
                    <tr key={subject.name}>
                      <td className="border p-3">{subject.name}</td>
                      <td className="border p-3 text-center">
                        {subject.marks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg bg-gray-100 p-5 text-center">
                <p className="text-gray-500">Grade</p>
                <h3 className="text-3xl font-bold text-blue-600">
                  {result.grade}
                </h3>
              </div>

              <div className="rounded-lg bg-gray-100 p-5 text-center">
                <p className="text-gray-500">GPA</p>
                <h3 className="text-3xl font-bold text-green-600">
                  {result.gpa}
                </h3>
              </div>

              <div className="rounded-lg bg-gray-100 p-5 text-center">
                <p className="text-gray-500">Status</p>
                <h3 className="text-3xl font-bold text-green-600">Passed</h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}