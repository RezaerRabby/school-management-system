import UpcomingEvents from "./UpcomingEvents";
import EventGallery from "./EventGallery";

export default function EventSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            School Activities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Upcoming Events
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Discover exciting school events, competitions, celebrations,
            and activities that inspire students to learn, participate,
            and grow together.
          </p>
        </div>

        <div className="mt-16">
          <UpcomingEvents />
        </div>

        <EventGallery />

      </div>
    </section>
  );
}