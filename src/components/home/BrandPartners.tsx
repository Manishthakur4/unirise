
import { useState, useEffect, useRef } from 'react';

const BrandPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const brands = [
    { name: 'GATI KWE', image: '/lovable-uploads/551addfc-38fa-47d1-bbfc-b2ba41986d23.png' },
    { name: 'C&S Electric', image: '/lovable-uploads/41cb2634-50e7-42d9-9888-b8d19563b7fe.png' },
    { name: 'Mahindra', image: '/lovable-uploads/7859a011-52b4-4e73-942e-15297abfe657.png' },
    { name: 'Spark Minda', image: '/lovable-uploads/4d405e12-cb97-45ed-83b6-08fa841acee6.png' },
    { name: 'Bikano', image: '/lovable-uploads/1bb47cbb-9b5b-4e00-a91a-2643b9ca1707.png' },
    { name: 'Haldiram\'s', image: '/lovable-uploads/eccda2d6-d34c-40fc-9304-c7c5a3417609.png' },
    { name: 'Big Basket', image: '/lovable-uploads/71eed01b-7c81-4df0-bfda-3d753cc2400b.png' },
  ];

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === brands.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <div className="fixed right-0 top-1/3 z-40 bg-white shadow-lg rounded-l-lg p-4 transition-all duration-300 hover:translate-x-0 translate-x-2 border-l border-t border-b border-gray-200 max-w-[150px]">
      <h3 className="text-lg font-bold text-unirise-red mb-4 text-center">Our Clients</h3>
      
      <div ref={containerRef} className="w-full h-[150px] overflow-hidden relative">
        <div 
          className="flex flex-col transition-transform duration-1000 absolute w-full"
          style={{ 
            transform: `translateY(${-currentIndex * 150}px)`,
          }}
        >
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="w-full h-[150px] flex items-center justify-center shrink-0"
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
      
      <div className="flex justify-center mt-4 gap-1">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-unirise-red' : 'bg-gray-300'}`}
            aria-label={`Go to brand ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPartners;
