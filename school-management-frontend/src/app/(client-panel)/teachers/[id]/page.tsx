import Image from "next/image";

interface TeacherDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TeacherDetailsPage({
  params,
}: TeacherDetailsPageProps) {
  const { id } = await params;

  // পরে Backend API দিয়ে replace করবে
  const teacher = {
    id,
    name: "Md. Rahim Uddin",
    designation: "Senior Mathematics Teacher",
    department: "Mathematics",
    qualification: "M.Sc. in Mathematics",
    experience: "12 Years",
    email: "rahim@example.com",
    phone: "+8801712345678",
    image: "/teachers/teacher-1.jpg",
    bio:
      "Md. Rahim Uddin has been teaching Mathematics for more than 12 years. He is passionate about helping students develop analytical thinking and problem-solving skills through modern teaching methods.",
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Teacher Profile
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Meet our experienced and dedicated faculty members.
          </p>

        </div>
      </section>

      {/* Teacher Details */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-lg lg:grid-cols-3">

          {/* Image */}
          <div className="flex justify-center">

            <div className="relative h-96 w-72 overflow-hidden rounded-2xl">

              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Details */}
          <div className="lg:col-span-2">

            <h2 className="text-4xl font-bold text-gray-900">
              {teacher.name}
            </h2>

            <p className="mt-3 text-xl font-semibold text-blue-600">
              {teacher.designation}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div>
                <p className="font-semibold text-gray-800">
                  Department
                </p>

                <p className="text-gray-600">
                  {teacher.department}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Qualification
                </p>

                <p className="text-gray-600">
                  {teacher.qualification}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Experience
                </p>

                <p className="text-gray-600">
                  {teacher.experience}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Email
                </p>

                <p className="text-gray-600">
                  {teacher.email}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Phone
                </p>

                <p className="text-gray-600">
                  {teacher.phone}
                </p>
              </div>

            </div>

            <div className="mt-10">

              <h3 className="text-2xl font-bold text-gray-900">
                Biography
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {teacher.bio}
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}