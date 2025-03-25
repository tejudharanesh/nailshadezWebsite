
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl text-salon-900 transition-all">
          Alkasthe
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-salon-900 hover:text-salon-600 transition-all">Home</a>
          <a href="#services" className="text-salon-900 hover:text-salon-600 transition-all">Services</a>
          <a href="#gallery" className="text-salon-900 hover:text-salon-600 transition-all">Gallery</a>
          <a href="#about" className="text-salon-900 hover:text-salon-600 transition-all">About</a>
          <a href="#contact" className="text-salon-900 hover:text-salon-600 transition-all">Contact</a>
          <a href="#booking" className="btn-primary">Book Now</a>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="text-salon-900" /> : <Menu className="text-salon-900" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="glass absolute top-full left-0 w-full py-6 px-6 flex flex-col space-y-6 md:hidden animate-fade-in">
          <a href="#home" className="text-salon-900 hover:text-salon-600 transition-all" onClick={toggleMenu}>Home</a>
          <a href="#services" className="text-salon-900 hover:text-salon-600 transition-all" onClick={toggleMenu}>Services</a>
          <a href="#gallery" className="text-salon-900 hover:text-salon-600 transition-all" onClick={toggleMenu}>Gallery</a>
          <a href="#about" className="text-salon-900 hover:text-salon-600 transition-all" onClick={toggleMenu}>About</a>
          <a href="#contact" className="text-salon-900 hover:text-salon-600 transition-all" onClick={toggleMenu}>Contact</a>
          <a href="#booking" className="btn-primary text-center" onClick={toggleMenu}>Book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
