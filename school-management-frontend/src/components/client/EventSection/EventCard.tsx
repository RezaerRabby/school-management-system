interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function EventCard({
  title,
  date,
  location,
  description,
}: EventCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-blue-600 px-6 py-4 text-white">
        <p className="text-sm font-semibold">{date}</p>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-600">
          📍 {location}
        </p>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}