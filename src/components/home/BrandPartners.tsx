
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
