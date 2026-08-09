import TeacherCard from "./TeacherCard";

const teachers = [
  {
    name: "Mahir Hasan",
    designation: "Senior Teacher",
    subject: "Mathematics",
    experience: "10 Years Experience",
  },
  {
    name: "Sarah Ahmed",
    designation: "Assistant Teacher",
    subject: "English",
    experience: "8 Years Experience",
  },
  {
    name: "Rakib Islam",
    designation: "Senior Teacher",
    subject: "Science",
    experience: "12 Years Experience",
  },
  {
    name: "Nusrat Jahan",
    designation: "Lecturer",
    subject: "ICT",
    experience: "6 Years Experience",
  },
];

export default function TeacherDetails() {
  return (
    <section className="mt-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.name}
            name={teacher.name}
            designation={teacher.designation}
            subject={teacher.subject}
            experience={teacher.experience}
          />
        ))}
      </div>
    </section>
  );
}