
import { useState, useEffect, useRef } from 'react';

const BrandPartners = () => {
  const brands = [
    { name: 'GATI KWE', image: '/lovable-uploads/551addfc-38fa-47d1-bbfc-b2ba41986d23.png' },
    { name: 'C&S Electric', image: '/lovable-uploads/41cb2634-50e7-42d9-9888-b8d19563b7fe.png' },
    { name: 'Mahindra', image: '/lovable-uploads/7859a011-52b4-4e73-942e-15297abfe657.png' },
    { name: 'Spark Minda', image: '/lovable-uploads/4d405e12-cb97-45ed-83b6-08fa841acee6.png' },
    { name: 'Bikano', image: '/lovable-uploads/1bb47cbb-9b5b-4e00-a91a-2643b9ca1707.png' },
    { name: 'Haldiram\'s', image: '/lovable-uploads/eccda2d6-d34c-40fc-9304-c7c5a3417609.png' },
    { name: 'Big Basket', image: '/lovable-uploads/71eed01b-7c81-4df0-bfda-3d753cc2400b.png' },
  ];

  // Double the brands array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];
  
  // Ref for animation
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll with continuous animation
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;
    
    // Set initial position
    let animationId: number;
    let startTime: number;
    let currentPosition = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Speed of scroll (adjust as needed)
      const scrollSpeed = 0.5; // pixels per millisecond
      
      // Calculate new position
      currentPosition = (currentPosition + scrollSpeed) % (scrollContainer.scrollHeight / 2);
      
      // Apply position - move upward
      scrollContainer.scrollTop = currentPosition;
      
      // If we've scrolled through the first set, reset to top to create seamless loop
      if (currentPosition >= scrollContainer.scrollHeight / 2) {
        currentPosition = 0;
        scrollContainer.scrollTop = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed right-0 top-1/3 z-40 bg-white shadow-lg rounded-l-lg p-4 transition-all duration-300 hover:translate-x-0 translate-x-2 border-l border-t border-b border-gray-200 max-w-[150px]">
      <h3 className="text-lg font-bold text-unirise-red mb-4 text-center">Our Clients</h3>
      
      <div 
        ref={containerRef} 
        className="w-full h-[200px] overflow-hidden relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex flex-col w-full">
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="w-full h-[100px] flex items-center justify-center shrink-0 my-2"
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
