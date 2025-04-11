
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import products from '@/data/products';
import { productCategories } from '@/data/productCategories';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const subtypeParam = searchParams.get('subtype');

  // Determine the initial category and get its display name
  let initialCategory = 'all';
  let categoryName = 'All Products';

  if (categoryParam) {
    initialCategory = categoryParam;
    // Find the display name for the category
    const category = productCategories.find(c => c.id === categoryParam);
    if (category) {
      categoryName = `${category.name}s`;
      
      // If we have a subtype param, find its display name
      if (subtypeParam) {
        const subtype = category.subtypes.find(s => s.id === subtypeParam);
        if (subtype) {
          categoryName = subtype.name + 's';
        }
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-32 pb-16"> {/* Increased padding-top from 24 to 32 to prevent content from being hidden by navbar */}
        <div className="scale-container">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-scale-navy mb-4">
              {categoryName}
            </h1>
            <p className="text-scale-gray text-lg max-w-3xl">
              Browse our extensive collection of high-quality weighing scales. From precision laboratory balances to rugged industrial scales, we have solutions for every industry.
            </p>
          </header>
          
          <ProductGrid products={products} initialCategory={initialCategory} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
