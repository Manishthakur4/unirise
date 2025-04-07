
import { useState, useEffect } from 'react';

const BrandPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const brands = [
    { name: 'GATI KWE', image: '/lovable-uploads/551addfc-38fa-47d1-bbfc-b2ba41986d23.png' },
    { name: 'C&S Electric', image: '/lovable-uploads/41cb2634-50e7-42d9-9888-b8d19563b7fe.png' },
    { name: 'Mahindra', image: '/lovable-uploads/7859a011-52b4-4e73-942e-15297abfe657.png' },
    { name: 'Spark Minda', image: '/lovable-uploads/4d405e12-cb97-45ed-83b6-08fa841acee6.png' },
    { name: 'Bikano', image: '/lovable-uploads/1bb47cbb-9b5b-4e00-a91a-2643b9ca1707.png' },
    { name: 'Haldiram\'s', image: '/lovable-uploads/eccda2d6-d34c-40fc-9304-c7c5a3417609.png' },
    { name: 'Big Basket', image: '/lovable-uploads/71eed01b-7c81-4df0-bfda-3d753cc2400b.png' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === brands.length - 5 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="scale-container">
        <h2 className="section-heading text-center mb-12">Trusted by Leading Brands</h2>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => setCurrentIndex(prev => prev === 0 ? brands.length - 5 : prev - 1)}
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-unirise-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center justify-center">
            {/* Visible brands */}
            <div className="flex items-center space-x-8 py-8 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 200}px)` }}>
              {brands.map((brand, index) => (
                <div key={index} className="w-40 h-24 flex-shrink-0 mx-4">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-full h-full object-contain filter transition hover:brightness-110"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => setCurrentIndex(prev => prev === brands.length - 5 ? 0 : prev + 1)}
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-unirise-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {brands.slice(0, brands.length - 4).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-unirise-red' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
