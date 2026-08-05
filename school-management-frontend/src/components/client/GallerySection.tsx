import Image from "next/image";
export default function GallerySection() {

    const galleryImages = [
      {
        id: 1,
        title: "School Campus",
        image: "/images/gallery/gallery-1.jpg",
      },
      {
        id: 2,
        title: "Science Lab",
        image: "/images/gallery/gallery-2.jpg",
      },
      {
        id: 3,
        title: "Computer Lab",
        image: "/images/gallery/gallery-3.jpg",
      },
      {
        id: 4,
        title: "Library",
        image: "/images/gallery/gallery-4.jpg",
      },
      {
        id: 5,
        title: "Sports Day",
        image: "/images/gallery/gallery-5.jpg",
      },
      {
        id: 6,
        title: "Cultural Program",
        image: "/images/gallery/gallery-6.jpg",
      },
      {
        id: 7,
        title: "Classroom",
        image: "/images/gallery/gallery-7.jpg",
      },
      {
        id: 8,
        title: "Annual Picnic",
        image: "/images/gallery/gallery-8.jpg",
      },
    ];

  return (
     <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Gallery
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Explore memorable moments, campus life, academic activities,
            and special events from our school.
          </p>

        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 w-full">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Every Picture Tells a Story
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Our gallery reflects the vibrant learning environment,
            achievements, and joyful memories created every year.
          </p>

        </div>

      </section>

    </main>   

    );
}