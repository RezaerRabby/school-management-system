import Image from "next/image";

interface GalleryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GalleryDetailsPage({
  params,
}: GalleryDetailsPageProps) {
  const { id } = await params;

  // পরে Backend API দিয়ে replace করবে
  const gallery = {
    id,
    title: "Annual Sports Day 2026",
    category: "Sports",
    date: "15 February 2026",
    image: "/gallery/gallery-1.jpg",
    description:
      "Our Annual Sports Day was successfully organized with the participation of students, teachers, and parents. Students competed in various indoor and outdoor events, making the day enjoyable and memorable for everyone.",
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            {gallery.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            {gallery.title}
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            {gallery.date}
          </p>

        </div>
      </section>

      {/* Gallery Details */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

          {/* Image */}
          <div className="relative h-[500px] w-full">

            <Image
              src={gallery.image}
              alt={gallery.title}
              fill
              className="object-cover"
              priority
            />

          </div>

          {/* Content */}
          <div className="p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              {gallery.title}
            </h2>

            <p className="mt-2 text-sm font-medium text-blue-600">
              {gallery.category} • {gallery.date}
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              {gallery.description}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}