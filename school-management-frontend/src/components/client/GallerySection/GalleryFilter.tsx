interface GalleryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  "All",
  "Events",
  "Sports",
  "Classroom",
  "Campus",
];

export default function GalleryFilter({
  activeCategory,
  setActiveCategory,
}: GalleryFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-6 py-2 font-semibold transition ${
            activeCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}