import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { testimonials } from "../components/Testimonials/data";

export default function TestimonialPage() {
  const { id } = useParams();
  const testimonial = testimonials.find((t) => t.id === parseInt(id));

  if (!testimonial) {
    return <div>Testimonial not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-primary hover:text-primary/40 mb-8"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </Link>

      <div className="bg-white rounded-xl  overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-8">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={testimonial.avatar}
              alt={testimonial.name}
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {testimonial.name}
              </h1>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {testimonial.fullStory}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
