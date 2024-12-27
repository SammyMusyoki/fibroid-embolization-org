import React from "react";


const GalleryItem = ({ item, onClick }) => {
  return (
    <div
      className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-64">
        <img
          src={item.image}
          alt={item.description}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-medium">View Details</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
