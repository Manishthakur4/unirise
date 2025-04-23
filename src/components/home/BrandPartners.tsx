
import { useState, useEffect, useRef } from 'react';

const BrandPartners = () => {
  const brands = [
    { name: 'GATI KWE', image: '/lovable-uploads/gatikwe.jpeg' },
    { name: 'C&S Electric', image: '/lovable-uploads/c&celectric.jpeg' },
    { name: 'Mahindra', image: '/lovable-uploads/mahindra.jpeg' },
    { name: 'Spark Minda', image: '/lovable-uploads/sparkminda.jpeg' },
    { name: 'Bikano', image: '/lovable-uploads/bikano.jpeg' },
    { name: 'Haldiram\'s', image: '/lovable-uploads/haldiram.jpeg' },
    { name: 'Big Basket', image: '/lovable-uploads/bigbasket.jpeg' },
    { name: 'Makino Auto', image: '/lovable-uploads/makinoauto.jpeg' },

  ];

  // Animation interval in milliseconds
  const scrollInterval = 3000;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % brands.length;
          
          // Apply smooth scroll animation
          const itemHeight = scrollContainerRef.current?.clientHeight ? 
            scrollContainerRef.current.clientHeight / 5 : 100; // Adjusted for 5 items
            
          scrollContainerRef.current?.scrollTo({
            top: nextIndex * itemHeight,
            behavior: 'smooth'
          });
          
          return nextIndex;
        });
      }
    }, scrollInterval);

    return () => clearInterval(intervalId);
  }, [brands.length]);

  return (
    <div className="fixed right-0 top-1/3 z-40 bg-white shadow-lg rounded-l-lg p-4 transition-all duration-300 hover:translate-x-0 translate-x-2 border-l border-t border-b border-gray-200 max-w-[150px]">
      <h3 className="text-lg font-bold text-unirise-red mb-4 text-center">Our Clients</h3>
      
      <div 
        ref={scrollContainerRef} 
        className="w-full h-[350px] overflow-y-hidden relative" // Increased height from 200px to 350px
      >
        <div className="flex flex-col w-full">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="w-full h-[70px] flex items-center justify-center shrink-0 my-2" // Increased height slightly from 66px to 70px
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPartners;
