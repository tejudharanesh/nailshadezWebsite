import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1604654894611-6973b183ba67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
            filter: "brightness(0.9)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-900/40 to-salon-900/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Small tag above heading */}
          <div
            className={`inline-block mb-4 py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium ${
              isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
            }`}
          >
            PREMIUM NAIL SALON
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 ${
              isVisible
                ? "opacity-100 animate-slide-up animate-delay-100"
                : "opacity-0"
            }`}
          >
            Elevate Your{" "}
            <span className="relative">
              Style
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-400"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl mb-8 text-white/90 max-w-xl mx-auto ${
              isVisible
                ? "opacity-100 animate-slide-up animate-delay-200"
                : "opacity-0"
            }`}
          >
            Experience luxury nail care with our premium services. Where
            artistry meets relaxation.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 ${
              isVisible
                ? "opacity-100 animate-slide-up animate-delay-300"
                : "opacity-0"
            }`}
          >
            <a href="#booking" className="btn-primary">
              Book Appointment
            </a>
            <a
              href="#services"
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 md:bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-1">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
