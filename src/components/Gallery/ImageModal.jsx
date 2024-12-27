import React from "react";
import { HiOutlineX } from "react-icons/hi";

const ImageModal= ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 z-10"
        >
          <HiOutlineX className="w-6 h-6 bg-white rounded-sm m-4" />
        </button>
        <div className="p-4">
          <img
            src={item.image}
            alt={item.description}
            className="w-full h-[60vh] object-cover rounded-md"
          />
          <p className="mt-4 text-gray-700 text-xl font-bold">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
