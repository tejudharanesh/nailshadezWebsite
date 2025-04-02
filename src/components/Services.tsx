import React, { useEffect, useRef, useState } from "react";
import image1 from "../assets/services/image1.jpg";
import image2 from "../assets/services/image2.jpg";
import image3 from "../assets/services/image3.jpg";
import image4 from "../assets/services/image4.jpg";
import image5 from "../assets/services/image5.jpg";
import image6 from "../assets/services/image6.webp";
import image7 from "../assets/services/image7.jpg";
import image8 from "../assets/services/image8.jpg";
import image9 from "../assets/services/image9.jpg";

const services = [
  {
    id: 1,
    name: "Nail Art",
    description: "Custom nail art designs tailored to your style and occasion.",
    price: "₹500",
    duration: "Varies",
    image: image1,
  },
  {
    id: 2,
    name: "Acrylic Extensions",
    description:
      "Enhance your nails with durable acrylic extensions for a long-lasting look.",
    price: "₹500",
    duration: "90 mins",
    image: image2,
  },
  {
    id: 3,
    name: "Gel Extensions",
    description:
      "Add length and strength to your nails with glossy gel extensions.",
    price: "₹500",
    duration: "90 mins",
    image: image3,
  },
  {
    id: 4,
    name: "Russian Manicure and Pedicure",
    description:
      "Experience the precision of a Russian manicure and pedicure for perfectly groomed nails.",
    price: "₹500",
    duration: "2 hrs",
    image: image4,
  },
  {
    id: 5,
    name: "Birthday Nails",
    description:
      "Celebrate your special day with customized birthday nail designs.",
    price: "₹500",
    duration: "75 mins",
    image: image5,
  },
  {
    id: 6,
    name: "Customized Stick-Ons",
    description:
      "Get personalized, reusable stick-on nails designed to match your style.",
    price: "₹500",
    duration: "Varies",
    image: image6,
  },
  {
    id: 7,
    name: "French Nails",
    description: "A timeless French manicure for a classic and elegant look.",
    price: "₹500",
    duration: "60 mins",
    image: image7,
  },
  {
    id: 8,
    name: "Eyelash Extensions",
    description:
      "Add volume and length to your natural lashes with semi-permanent eyelash extensions.",
    price: "₹500",
    duration: "90 mins",
    image: image8,
  },
  {
    id: 9,
    name: "Eyelash Training",
    description:
      "Learn the art of eyelash extension application with our professional training course.",
    price: "₹500",
    duration: "6 Hours",
    image: image9,
  },
];

const Services = ({ onOpenBooking }) => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleServices((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-salon-100 text-salon-800 text-sm font-medium mb-4">
            OUR SERVICES
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto">
            Premium Nail Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Discover our comprehensive range of nail services designed to
            pamper, beautify, and rejuvenate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-id={service.id}
              className={`bg-white flex flex-col justify-between border border-muted rounded-lg overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md ${
                visibleServices.includes(service.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${(index % 3) * 100}ms`,
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-2 md:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-medium text-salon-900">
                    {service.name}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-muted-foreground">
                      {service.duration}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <button
                  className="w-full py-2 border-2 border-salon-500 text-salon-500 font-medium rounded-md transition-al hover:bg-salon-500 hover:text-white"
                  onClick={() => onOpenBooking()}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
