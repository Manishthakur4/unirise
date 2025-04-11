
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductDetails from '@/components/products/ProductDetails';
import products from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  // Find related products (same subtype or category)
  const relatedProducts = products
    .filter(p => {
      // First try to find products with the same subtype
      if (p.subtype === product?.subtype && p.id !== product?.id) {
        return true;
      }
      // If not enough from the same subtype, include products from the same category
      return p.type === product?.type && p.id !== product?.id;
    })
    .slice(0, 4);

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="scale-container">
          <ProductDetails product={product} />
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-scale-navy mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductView;
