import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-10">
          {/* Left Column - Contact Form */}
          <div className="order-2 md:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-salon-100 text-salon-800 text-sm font-medium mb-4">
              CONTACT US
            </span>
            <h2 className="section-heading">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have a question or ready to book an appointment? Fill out the form
              below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-salon-800 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-salon-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-salon-800 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-salon-500 transition-all"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-salon-800 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-salon-500 transition-all"
                    placeholder="Your phone (optional)"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-salon-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-salon-500 transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg shadow-sm p-8 h-full">
              <h3 className="font-serif text-2xl font-medium text-salon-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="text-salon-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-800 mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      75, Basement, 4th Main, 4th Cross, Arekere Mico Layout
                      Near Subramnaya Temple
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="text-salon-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-800 mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+91 9480215624"
                        className="hover:text-salon-500 transition-colors"
                      >
                        +91 9480215624
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="text-salon-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-800 mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:nailshadezz@gmail.com"
                        className="hover:text-salon-500 transition-colors"
                      >
                        nailshadezz@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="text-salon-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-salon-800 mb-1">
                      Business Hours
                    </h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 11:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-salon-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-salon-50 flex items-center justify-center text-salon-500 transition-all hover:bg-salon-500 hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-salon-50 flex items-center justify-center text-salon-500 transition-all hover:bg-salon-500 hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
