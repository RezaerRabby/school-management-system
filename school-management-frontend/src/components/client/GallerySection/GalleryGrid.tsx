"use client";

import { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryFilter from "./GalleryFilter";


const galleryItems = [
  {
    id: 1,
    title: "Annual Sports Day",
    category: "Sports",
  },
  {
    id: 2,
    title: "Science Fair",
    category: "Events",
  },
  {
    id: 3,
    title: "Modern Classroom",
    category: "Classroom",
  },
  {
    id: 4,
    title: "School Building",
    category: "Campus",
  },
  {
    id: 5,
    title: "Cultural Program",
    category: "Events",
  },
  {
    id: 6,
    title: "Football Competition",
    category: "Sports",
  },
];


export default function GalleryGrid() {

  const [category, setCategory] = useState("All");


  const filteredGallery =
    category === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === category
        );


  return (
    <>

      <GalleryFilter
        activeCategory={category}
        setActiveCategory={setCategory}
      />


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {filteredGallery.map((item) => (

          <GalleryCard
            key={item.id}
            title={item.title}
            category={item.category}
          />

        ))}

      </div>

    </>
  );
}