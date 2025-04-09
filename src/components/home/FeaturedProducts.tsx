
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import products from '@/data/products';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'laboratory', name: 'Laboratory' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'personal', name: 'Personal' },
  ];
  
  const featuredProducts = products.filter(product => product.isFeatured || product.isNewArrival);
  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts
    : featuredProducts.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="scale-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured Products</h2>
          <p className="section-subheading mx-auto">
            Discover our most popular weighing solutions, trusted by professionals across industries
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-scale-navy text-white'
                    : 'bg-white text-scale-navy hover:bg-scale-light'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {filteredProducts.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ProductCard product={product} featured={product.isFeatured} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static mr-2 h-10 w-10 rounded-full" />
                <CarouselNext className="relative static ml-2 h-10 w-10 rounded-full" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-scale-gray">No products found in this category.</p>
          </div>
        )}
        
        <div className="mt-4 text-center">
          <Button asChild className="bg-scale-navy hover:bg-scale-navy/90 text-lg px-8 py-6">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
