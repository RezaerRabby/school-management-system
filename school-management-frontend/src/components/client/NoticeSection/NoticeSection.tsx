import NoticeList from "./NoticeList";

export default function NoticeSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Latest News
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            School Notices
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Stay informed with the latest announcements, examination
            schedules, holidays, admission updates, and important school
            activities.
          </p>
        </div>

        <div className="mt-16">
          <NoticeList />
        </div>

      </div>
    </section>
  );
}