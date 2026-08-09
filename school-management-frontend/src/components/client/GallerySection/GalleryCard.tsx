
import Link from "next/link";

interface GalleryCardProps {
  id: string;
  title: string;
  category: string;
}

export default function GalleryCard({
  id,
  title,
  category,
}: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image Placeholder */}
      <div className="flex h-64 items-center justify-center bg-gray-200">
        <span className="text-5xl font-bold text-blue-600">
          {title.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-600">
          {category}
        </p>

        <Link
          href={`/gallery/${id}`}
          className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View Gallery
        </Link>

      </div>

    </div>
  );
}