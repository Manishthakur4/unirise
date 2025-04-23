
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { productCategories } from '@/data/productCategories';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
}

const ProductGrid = ({ products, initialCategory = 'all' }: ProductGridProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category');
  const subtypeParam = searchParams.get('subtype');

  const [category, setCategory] = useState(initialCategory);
  const [subtype, setSubtype] = useState<string | null>(subtypeParam);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

  useEffect(() => {
    if (categoryParam) setCategory(categoryParam);
    if (subtypeParam) setSubtype(subtypeParam);
    // eslint-disable-next-line
  }, [categoryParam, subtypeParam]);

  // Get active category from productCategories
  const activeCategory = productCategories.find(cat => cat.id === category);

  useEffect(() => {
    // Filter by category and subtype
    let result = products;

    if (category !== 'all') {
      result = products.filter(product => product.type === category);

      if (subtype) {
        result = result.filter(product => product.subtype === subtype);
      }
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
  }, [category, subtype, sortBy, products, initialCategory]);

  const loadMore = () => setVisibleProducts(prev => prev + 8);

  return (
    <div>
      <div className="mb-8 w-full flex flex-row items-center justify-between">
        <div>
          <label htmlFor="sort" className="text-scale-gray mr-2 text-sm">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-100 border-none rounded-md text-scale-navy focus:ring-scale-teal py-2 px-3 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
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
