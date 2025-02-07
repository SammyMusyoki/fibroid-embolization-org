import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./data";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full bg-green-50">
      <div className="relative max-w-7xl mx-auto px-4 py-16 ">
        <h2 className="text-3xl font-semibold mb-8 text-center py-4 font">
          Member's Stories
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-0 p-2 rounded-full border border-accent hover:bg-accent focus:outline-none"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>

          <div className="transition-opacity duration-500 ease-in-out">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 p-2 rounded-full border border-accent hover:bg-accent focus:outline-none"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
