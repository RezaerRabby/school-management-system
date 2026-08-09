const gallery = [
  "Sports Day",
  "Science Fair",
  "Debate Competition",
  "Prize Giving Ceremony",
  "Study Tour",
  "Independence Day",
];

export default function EventGallery() {
  return (
    <section className="mt-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Event Gallery
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <div
            key={item}
            className="flex h-56 items-center justify-center rounded-2xl bg-gray-200 shadow"
          >
            <span className="text-xl font-semibold text-gray-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}