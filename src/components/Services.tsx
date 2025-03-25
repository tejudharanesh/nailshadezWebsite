
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    name: "Classic Manicure",
    description: "Our signature manicure includes nail shaping, cuticle care, hand massage, and polish application.",
    price: "$35",
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1604654894611-6973b183ba67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Luxury Pedicure",
    description: "A rejuvenating treatment featuring a warm foot soak, exfoliation, nail care, and a relaxing massage.",
    price: "$55",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1610992013803-575aaef1e3c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Gel Polish",
    description: "Long-lasting, chip-resistant polish that gives your nails a glossy finish for up to two weeks.",
    price: "$45",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1601051297657-f12aa1200a884?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Nail Art Design",
    description: "Express your personality with custom nail art, from simple accents to elaborate designs.",
    price: "$15+",
    duration: "Varies",
    image: "https://images.unsplash.com/photo-1607779097040-f06a551d7f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Nail Extensions",
    description: "Enhance your natural nails with acrylics, gels, or tips for added length and strength.",
    price: "$75",
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Spa Package",
    description: "Indulge in our comprehensive spa package including manicure, pedicure, and paraffin treatment.",
    price: "$120",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
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
            Discover our comprehensive range of nail services designed to pamper, beautify, and rejuvenate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-id={service.id}
              className={`bg-white border border-muted rounded-lg overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md ${
                visibleServices.includes(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
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
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-medium text-salon-900">
                    {service.name}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-medium text-salon-800">
                      {service.price}
                    </span>
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
                <button className="w-full py-2 border-2 border-salon-500 text-salon-500 font-medium rounded-md transition-all hover:bg-salon-500 hover:text-white">
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
