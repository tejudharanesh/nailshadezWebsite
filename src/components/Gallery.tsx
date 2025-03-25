
import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1604654894611-6973b183ba67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Manicure"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pedicure"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1604902394631-2ce5ed0b3649?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nail Art"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1588582153228-d01ac0a6fb60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Gel Polish"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1610992014623-6435d6080451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Extensions"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1610992013803-575aaef1e3c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pedicure"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1598302936625-6075fbd98317?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nail Art"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1607779097040-f06a551d7f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Manicure"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-salon-100 text-salon-800 text-sm font-medium mb-4">
            OUR WORK
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto">
            Nail Art Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Browse through our gallery showcasing our finest nail art and designs.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-salon-500 text-white'
                  : 'bg-white border border-salon-200 text-salon-700 hover:bg-salon-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64 md:h-80"
              onClick={() => setActiveImage(image.id)}
            >
              <img 
                src={image.url} 
                alt={`Nail art - ${image.category}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="inline-block px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded text-white mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">Click to enlarge</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages.find(img => img.id === activeImage)?.url} 
                alt="Enlarged nail art" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
                onClick={() => setActiveImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
