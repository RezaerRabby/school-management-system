import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "10 September 2026",
    location: "School Playground",
    description:
      "Students will participate in different indoor and outdoor sports competitions.",
  },
  {
    id: 2,
    title: "Science Fair",
    date: "22 September 2026",
    location: "School Auditorium",
    description:
      "Students will present innovative science projects and experiments.",
  },
  {
    id: 3,
    title: "Cultural Program",
    date: "05 October 2026",
    location: "Main Hall",
    description:
      "Music, dance, drama, and other cultural performances by students.",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          description={event.description}
        />
      ))}
    </div>
  );
}