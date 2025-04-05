
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import products from '@/data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="scale-container">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-scale-navy mb-4">
              {categoryParam 
                ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Scales` 
                : 'All Scales'}
            </h1>
            <p className="text-scale-gray text-lg max-w-3xl">
              Browse our extensive collection of high-quality weighing scales. From precision laboratory balances to rugged industrial scales, we have solutions for every industry.
            </p>
          </header>
          
          <ProductGrid products={products} initialCategory={categoryParam || 'all'} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
