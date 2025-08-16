import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import products from '@/data/products';

const Hero = () => {
  const featuredProducts = products
    .filter(product => product.isFeatured)
    .slice(0, 5);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', updateSelectedIndex);
    updateSelectedIndex();

    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [emblaApi]);

  return (
    <div className="pt-32 pb-16 md:pt-30 md:pb-24 bg-gradient-to-br from-white to-gray-100">
      <div className="scale-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Precision <span className="text-unirise-red">Weighing</span> Solutions for Every Need
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              From laboratory precision to industrial strength, find the perfect scale with Unirise. We believe in service excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="text-lg px-8 py-6 bg-unirise-red hover:bg-unirise-red/90">
                <Link to="/products">Browse Scales</Link>
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-6 border-unirise-red text-unirise-red hover:bg-unirise-red/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-unirise-red flex items-center justify-center text-white text-xs">TK</div>
                <div className="w-10 h-10 rounded-full bg-unirise-light flex items-center justify-center text-white text-xs">MP</div>
                <div className="w-10 h-10 rounded-full bg-[#FF5B64] flex items-center justify-center text-white text-xs">JD</div>
              </div>
              <p className="text-gray-600">Trusted by <span className="font-bold">1000+</span> businesses</p>
            </div>
          </div>

          <div className="relative animate-scale-in lg:pl-10">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex">
                  {featuredProducts.length > 0 ? (
                    featuredProducts.map((product) => (
                      <div key={product.id} className="min-w-full relative">
                        <Link to={`/product/${product.id}`} className="block relative pb-[56.25%]">
                          <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute top-0 left-0 bg-unirise-red text-white px-4 py-2 rounded-br-lg font-semibold">
                            Featured
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-2 px-4">
                            <p className="font-medium">{product.name}</p>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="min-w-full relative pb-[56.25%]">
                      <img
                        src="/placeholder.svg"
                        alt="Digital scale for precision weighing"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-unirise-red text-white px-4 py-2 rounded-br-lg font-semibold">
                        Featured
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Dots Pagination */}
              <div className="flex justify-center items-center gap-2 py-4 bg-white">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === selectedIndex
                        ? 'bg-unirise-red scale-110'
                        : 'bg-gray-300 hover:bg-unirise-red/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#FF5B64] text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Contact Us</p>
              <p className="text-2xl font-bold">For Best Deals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
