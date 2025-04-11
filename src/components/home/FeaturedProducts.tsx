
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import products from '@/data/products';
import { productCategories } from '@/data/productCategories';

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const navigate = useNavigate();
  
  const featuredProducts = products.filter(product => product.isFeatured || product.isNewArrival);
  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts
    : featuredProducts.filter(product => 
        activeCategory === product.type || 
        activeCategory === product.subtype
      );

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    if (categoryId !== 'all') {
      // Get the active category
      const category = productCategories.find(c => c.id === categoryId);
      if (category) {
        // If it's a main category, navigate to its products page
        navigate(`/products?category=${categoryId}`);
      }
    }
  };

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
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-scale-navy text-white'
                  : 'bg-white text-scale-navy hover:bg-scale-light'
              }`}
            >
              All
            </button>
            
            {/* Main categories */}
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} featured={product.isFeatured} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-scale-navy hover:bg-scale-navy/90 text-lg px-8 py-6">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
