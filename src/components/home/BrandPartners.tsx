
import { useState, useEffect, useRef } from 'react';
import { Minimize, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const scrollInterval = 3000;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % brands.length;
          const itemHeight = scrollContainerRef.current?.clientHeight
            ? scrollContainerRef.current.clientHeight / 5
            : 100;
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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed right-0 top-[80px] z-40 pointer-events-none">
      <div 
        className={`bg-white shadow-lg rounded-l-lg border-l border-t border-b border-gray-200 transition-all duration-300 pointer-events-auto ${
          isMinimized 
            ? 'w-[50px] h-[50px]' 
            : 'max-w-[150px] h-[calc(100vh-80px)]'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          {!isMinimized && <h3 className="text-lg font-bold text-unirise-red">Our Clients</h3>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMinimize}
            className="ml-auto"
            aria-label={isMinimized ? "Expand client list" : "Minimize client list"}
          >
            {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
          </Button>
        </div>
        
        {!isMinimized && (
          <div 
            ref={scrollContainerRef} 
            className="w-full h-[calc(100%-60px)] overflow-y-hidden relative"
          >
            <div className="flex flex-col w-full">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="w-full h-[120px] flex items-center justify-center shrink-0 my-4"
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
        )}
      </div>
    </div>
  );
};

export default BrandPartners;
