import React, { useState } from "react";
import GalleryItem from "../components/Gallery/GalleryItem";
import ImageModal from "../components/Gallery/ImageModal";
import { Donation1, Donation2, Donation3, Donation4 } from "../images";
import HeroComponent from "../components/HeroComponent";

const Gallery = () => {
  const [selectedItem, setSelectedItem] =useState(null);

  const galleryItems = [
    {
      image:
        Donation1,
      description:
        "Empowering women through Education",
    },
    {
      image:
        Donation2,
      description:
        "Reproductive health is a cornerstone of women's empowerment: By providing education, resources, and support, we enable women to make informed decisions about their bodies, families, and futures.",
    },
    {
      image:
        Donation3,
      description:
        "Empowering women through access to maternal care: Every woman deserves the opportunity to experience safe pregnancies, informed choices, and quality healthcare for herself and her baby. Together, we can bridge the gap for a healthier future.",
    },
    {
      image:
        Donation4,
      description:
        "At the fibroid foundation we aim at creating awareness on women health, productive health, information sharing on medical innovative that are more safe clinically proven secure, and resource saving.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroComponent className="bg-contact">
        <div className="text-center sm:my-16">
          <div className="p-4 font-serif  bg-green-500 bg-opacity-40 border-green-200 border-2">
          <h1 className="text-6xl text-gray-100 mb-3 font-bold">Our Gallery</h1>
          <p className="text-xl text-gray-100">
            Explore our collection of images and learn about this innovative,
            minimally invasive procedure.
          </p>
          </div>
        </div>
      </HeroComponent>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default Gallery;
