import NoticeCard from "./NoticeCard";

const notices = [
  {
    id: 1,
    title: "Admission Open for 2026",
    date: "01 August 2026",
    description:
      "Admission for the new academic session is now open. Students can apply online or visit the school office.",
  },
  {
    id: 2,
    title: "Mid-Term Examination Schedule",
    date: "10 August 2026",
    description:
      "The Mid-Term Examination will begin on 20 August. Students are advised to collect their routine.",
  },
  {
    id: 3,
    title: "Annual Sports Day",
    date: "15 August 2026",
    description:
      "The Annual Sports Competition will be held on the school playground with various events.",
  },
  {
    id: 4,
    title: "Parent Teacher Meeting",
    date: "22 August 2026",
    description:
      "Parents are requested to attend the Parent-Teacher Meeting to discuss student performance.",
  },
];

export default function NoticeList() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          title={notice.title}
          date={notice.date}
          description={notice.description}
        />
      ))}
    </div>
  );
}