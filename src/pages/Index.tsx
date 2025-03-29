import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Smooth scroll function
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href");
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  // Adding a scroll back to top button
  useEffect(() => {
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    `;
    scrollToTopBtn.className =
      "fixed bottom-8 right-8 w-12 h-12 rounded-full bg-salon-500 text-white flex items-center justify-center shadow-lg opacity-0 transition-all duration-300 z-40 invisible";
    document.body.appendChild(scrollToTopBtn);

    const toggleScrollToTopBtn = () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.add("opacity-100");
        scrollToTopBtn.classList.remove("invisible");
      } else {
        scrollToTopBtn.classList.remove("opacity-100");
        scrollToTopBtn.classList.add("invisible");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", toggleScrollToTopBtn);
    scrollToTopBtn.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", toggleScrollToTopBtn);
      scrollToTopBtn.removeEventListener("click", scrollToTop);
      if (document.body.contains(scrollToTopBtn)) {
        document.body.removeChild(scrollToTopBtn);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
