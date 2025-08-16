
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import products from '@/data/products';
import { productCategories } from '@/data/productCategories';

const Products = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex flex-col md:flex-row pt-28 pb-16">
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 bg-white border-r border-gray-200 py-6 px-4 md:px-5 md:min-h-[calc(100vh-8rem)] md:sticky md:top-28">
          <h2 className="text-xl font-semibold text-scale-navy mb-5">Categories</h2>
          <div className="mb-8">
            <button
              onClick={() => navigate('/products')}
              className={`block w-full text-left px-4 py-2 rounded-lg mb-1 font-medium transition-colors ${
                !categoryParam
                  ? 'bg-scale-navy text-white'
                  : 'bg-gray-100 text-scale-navy hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            {productCategories.map(cat => (
              <div key={cat.id} className="mb-2">
                <button
                  onClick={() => navigate(`/products?category=${cat.id}`)}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    categoryParam === cat.id
                      ? 'bg-scale-navy text-white'
                      : 'bg-gray-100 text-scale-navy hover:bg-gray-200'
                  }`}
                >
                  {cat.name}s
                </button>
                {/* Subtypes */}
                {(categoryParam === cat.id || !categoryParam) && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {cat.subtypes.map(sub => (
                      <li key={sub.id}>
                        <button
                          onClick={() => navigate(`/products?category=${cat.id}&subtype=${sub.id}`)}
                          className={`block w-full text-left px-3 py-1 rounded transition-colors text-sm ${
                            subtypeParam === sub.id
                              ? 'bg-scale-navy text-white'
                              : 'hover:bg-gray-200 text-scale-navy'
                          }`}
                        >
                          {sub.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>
        {/* Main Products grid */}
        <section className="flex-1 px-4 md:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-scale-navy mb-4">
              {categoryName}
            </h1>
            <p className="text-scale-gray text-lg max-w-3xl">
              Browse our extensive collection of high-quality weighing scales. From precision laboratory balances to rugged industrial scales, we have solutions for every industry.
            </p>
          </header>
          <ProductGrid products={products} initialCategory={initialCategory} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
