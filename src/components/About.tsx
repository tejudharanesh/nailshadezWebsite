
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white" ref={aboutRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Nail salon interior" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-lg overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Nail technician" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-salon-100 text-salon-800 text-sm font-medium mb-4">
              ABOUT US
            </span>
            <h2 className="section-heading">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2015, Alkasthe Nail Bar was born from a passion for artistry and a desire to create a sanctuary where clients could escape, relax, and emerge refreshed with beautiful nails.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team consists of skilled technicians who are constantly updating their techniques to provide you with the latest trends and innovations in nail care.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-salon-500 font-medium">7+</span>
                <span className="text-sm text-muted-foreground">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-salon-500 font-medium">15k+</span>
                <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-salon-500 font-medium">12</span>
                <span className="text-sm text-muted-foreground">Skilled Artists</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-salon-500 font-medium">50+</span>
                <span className="text-sm text-muted-foreground">Nail Designs</span>
              </div>
            </div>
            <a href="#contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
