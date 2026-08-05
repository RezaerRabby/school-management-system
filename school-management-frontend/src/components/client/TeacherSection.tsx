export default function TeacherSection() {
  
    const teachers = [
    {
      name: "Md. Rahman",
      designation: "Principal",
      subject: "Administration",
    },
    {
      name: "Farhana Akter",
      designation: "Senior Teacher",
      subject: "Mathematics",
    },
    {
      name: "Abdul Karim",
      designation: "Assistant Teacher",
      subject: "English",
    },
    {
      name: "Nusrat Jahan",
      designation: "Assistant Teacher",
      subject: "Science",
    },
    {
      name: "Mahmud Hasan",
      designation: "Assistant Teacher",
      subject: "ICT",
    },
    {
      name: "Sadia Islam",
      designation: "Assistant Teacher",
      subject: "Bangla",
    },
  ];

  return (

    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Our Teachers
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Meet our experienced and dedicated teachers who inspire,
            educate, and guide every student toward success.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Experienced Teaching Team
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our teachers are committed to providing quality education,
            encouraging creativity, and helping every student achieve
            academic excellence.
          </p>

        </div>

      </section>

      {/* Teacher Cards */}
      <section className="pb-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">

          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Avatar */}
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">
                {teacher.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold">
                {teacher.name}
              </h3>

              <p className="mt-2 text-center font-medium text-blue-600">
                {teacher.designation}
              </p>

              <p className="mt-4 text-center text-gray-600">
                Subject: {teacher.subject}
              </p>

              <button className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                View Profile
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Our Teachers */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Why Learn With Our Teachers?
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-gray-50 p-8 shadow">
              <h3 className="text-xl font-bold">
                Qualified Educators
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Highly qualified teachers with years of teaching
                experience and professional training.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow">
              <h3 className="text-xl font-bold">
                Student-Centered Learning
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Interactive teaching methods that encourage curiosity,
                confidence, and creativity.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow">
              <h3 className="text-xl font-bold">
                Continuous Support
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Every student receives personal guidance to improve
                academic performance and personal development.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
   
  );
}