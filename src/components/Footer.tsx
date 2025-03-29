import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-salon-900 text-white pt-16 pb-2">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo & About */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl mb-4">NailShadeZ</h3>
            <p className="text-salon-100 text-sm mb-6 max-w-xs">
              Premium nail salon offering high-quality services in a relaxing
              environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-all hover:bg-white/20"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-all hover:bg-white/20"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="#home"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-medium mb-3">Our Services</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Gel Polish
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Nail Art
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Acrylic Extensions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Gel Extensions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Russian Manicure and Pedicure
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Birthday Nails
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Customized Stick-ons
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  French Nails
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Eyelash Extensions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-salon-100 hover:text-white transition-colors text-sm"
                >
                  Eyelash Training
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-salon-100 text-sm flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-salon-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>
                  75, Basement, 4th Main, 4th Cross, Arekere, Mico Layout Near
                  Subramnaya Temple
                </span>
              </p>
              <p className="text-salon-100 text-sm flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-salon-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a
                  href="tel:+91 9480215624"
                  className="hover:text-white transition-colors"
                >
                  +91 9480215624
                </a>
              </p>
              <p className="text-salon-100 text-sm flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-salon-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:nailshadezz@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  nailshadezz@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Business Hours</h4>
              <p className="text-salon-100 text-sm">
                Mon - Fri: 10:00 AM - 7:00 PM
              </p>
              <p className="text-salon-100 text-sm">
                Saturday: 10:00 AM - 6:00 PM
              </p>
              <p className="text-salon-100 text-sm">
                Sunday: 11:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-salon-800 text-center text-salon-300 text-sm">
          <p>&copy; {currentYear} NailShadeZ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
