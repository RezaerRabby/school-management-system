



export default function AboutSection() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            About Our School
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Empowering students with quality education, discipline,
            and innovation for a brighter future.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Welcome to Our School
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our school is committed to providing quality education
              in a safe and inspiring learning environment. We focus on
              academic excellence, character development, creativity,
              and leadership to prepare students for future success.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Through experienced teachers, modern classrooms, and
              technology-driven learning, we help every student achieve
              their full potential.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <div className="flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100">
              <p className="text-gray-500 text-lg">
                School Image
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-2xl bg-blue-600 p-10 text-white shadow-lg">
            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-6 leading-8">
              To provide high-quality education that develops
              knowledge, skills, creativity, leadership, and
              responsibility among students.
            </p>
          </div>

          <div className="rounded-2xl bg-green-600 p-10 text-white shadow-lg">
            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8">
              To become one of the leading educational institutions by
              fostering innovation, integrity, and lifelong learning.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <h2 className="text-4xl font-bold text-blue-600">
              1500+
            </h2>

            <p className="mt-2 text-gray-600">
              Students
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <h2 className="text-4xl font-bold text-green-600">
              120+
            </h2>

            <p className="mt-2 text-gray-600">
              Teachers
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <h2 className="text-4xl font-bold text-red-600">
              25+
            </h2>

            <p className="mt-2 text-gray-600">
              Years Experience
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 text-center shadow">
            <h2 className="text-4xl font-bold text-purple-600">
              98%
            </h2>

            <p className="mt-2 text-gray-600">
              Success Rate
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}




// export default function AboutSection() {
//   return (
//     <section className="bg-white py-20">
//       <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
//         {/* Left */}
//         <div>
//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
//             About Our School
//           </span>

//           <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
//             Building Bright Futures Through Quality Education
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Our school is committed to providing high-quality education,
//             encouraging creativity, leadership, discipline, and academic
//             excellence. We create a safe and inspiring environment where every
//             student can achieve their full potential.
//           </p>

//           <p className="mt-4 text-lg leading-8 text-gray-600">
//             With experienced teachers, modern classrooms, science laboratories,
//             computer labs, libraries, sports facilities, and extracurricular
//             activities, we prepare students for a successful future.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
//               Learn More
//             </button>

//             <button className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="grid grid-cols-2 gap-6">
//           <div className="rounded-2xl bg-blue-50 p-8 text-center shadow">
//             <h3 className="text-4xl font-bold text-blue-600">2500+</h3>
//             <p className="mt-2 text-gray-600">Students</p>
//           </div>

//           <div className="rounded-2xl bg-green-50 p-8 text-center shadow">
//             <h3 className="text-4xl font-bold text-green-600">120+</h3>
//             <p className="mt-2 text-gray-600">Teachers</p>
//           </div>

//           <div className="rounded-2xl bg-yellow-50 p-8 text-center shadow">
//             <h3 className="text-4xl font-bold text-yellow-600">35+</h3>
//             <p className="mt-2 text-gray-600">Classrooms</p>
//           </div>

//           <div className="rounded-2xl bg-red-50 p-8 text-center shadow">
//             <h3 className="text-4xl font-bold text-red-600">20+</h3>
//             <p className="mt-2 text-gray-600">Years of Excellence</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }