import { Link } from "react-router-dom";

export default function TestimonialCard({ testimonial }) {
  return (
    <section className="block">
      <div className="max-w-7xl mx-auto border rounded-sm border-accent overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <span className="h-12 w-12 rounded-full">
                <img
                className="w-full h-full object-center object-cover"
                src={testimonial.avatar}
                alt={testimonial.name}
                />
            </span>
            <div className="ml-4">
              <div className="text-xl font-semibold">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-700 text-lg leading-relaxed">
              "{testimonial.preview}"
            </p>
            <Link to={`/testimonial/${testimonial.id}`} className="mt-4 text-sm text-primary hover:text-primary/80">
              Read full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
