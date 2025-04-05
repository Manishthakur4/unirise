
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
}

const ProductGrid = ({ products, initialCategory = 'all' }: ProductGridProps) => {
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'laboratory', name: 'Laboratory' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'personal', name: 'Personal' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'name-asc', name: 'Name: A to Z' },
    { id: 'name-desc', name: 'Name: Z to A' },
  ];

  useEffect(() => {
    // Filter by category
    let result = products;
    if (category !== 'all') {
      result = products.filter(product => product.category === category);
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => {
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result = [...result].sort((a, b) => {
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'name-asc':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Featured - put featured and new arrivals first
        result = [...result].sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          if (a.isNewArrival && !b.isNewArrival) return -1;
          if (!a.isNewArrival && b.isNewArrival) return 1;
          return 0;
        });
    }
    
    setFilteredProducts(result);
  }, [category, sortBy, products]);

  const loadMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

  return (
    <div>
      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  category === cat.id
                    ? 'bg-scale-navy text-white'
                    : 'bg-gray-100 text-scale-gray hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="text-scale-gray mr-2 text-sm">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-100 border-none rounded-md text-scale-navy focus:ring-scale-teal py-2 px-3 text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                featured={product.isFeatured}
              />
            ))}
          </div>
          
          {visibleProducts < filteredProducts.length && (
            <div className="mt-12 text-center">
              <Button onClick={loadMore} className="bg-scale-navy hover:bg-scale-navy/90">
                Load More Products
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-scale-navy mb-2">No products found</h3>
          <p className="text-scale-gray">Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
