
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { toast } from '@/components/ui/use-toast';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Maximum quantity reached",
        description: `Only ${product.stock} units available in stock.`,
        variant: "destructive",
      });
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: `${quantity} x ${product.name} ready for purchase.`,
    });
    // In a real application, this would redirect to checkout
    setTimeout(() => {
      navigate('/checkout');
    }, 1500);
  };

  // Mock images (in a real app, these would be actual product images)
  const productImages = [
    product.image,
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-gradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <nav className="px-4 py-3 bg-gray-50">
        <ol className="flex text-sm">
          <li className="flex items-center">
            <Link to="/" className="text-scale-gray hover:text-scale-navy">
              Home
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link to="/products" className="text-scale-gray hover:text-scale-navy">
              Products
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="flex items-center text-scale-navy font-medium">
            {product.name}
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden aspect-square">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`border rounded-md overflow-hidden transition-all ${
                  selectedImage === image ? 'border-scale-teal ring-2 ring-scale-teal/20' : 'border-gray-200 hover:border-scale-teal/50'
                }`}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover aspect-square" />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-5">
          <div>
            <div className="flex items-center mb-2">
              <span className="uppercase text-xs font-medium text-scale-teal bg-scale-teal/10 px-2 py-1 rounded">
                {product.category}
              </span>
              {product.stock < 10 && (
                <span className="uppercase text-xs font-medium text-scale-orange bg-scale-orange/10 px-2 py-1 rounded ml-2">
                  Low Stock: {product.stock} left
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-scale-navy">{product.name}</h1>
            
            <div className="flex items-center mt-2">
              {renderStars(product.rating)}
              <span className="ml-2 text-scale-gray">({product.rating.toFixed(1)})</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-scale-gray">In Stock: {product.stock}</span>
            </div>
            
            <div className="mt-4">
              {product.discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-scale-navy">${product.discountedPrice.toFixed(2)}</span>
                  <span className="ml-3 text-lg text-scale-gray line-through">${product.price.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-white bg-scale-orange px-2 py-0.5 rounded-md">
                    {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-scale-navy">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="border-t border-b py-4 my-6">
              <p className="text-scale-gray">{product.description}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-scale-gray mb-1">
                    Quantity
                  </label>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={handleDecreaseQuantity}
                      className="px-3 py-2 text-scale-navy hover:bg-gray-100"
                      disabled={quantity <= 1}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="quantity"
                      value={quantity}
                      readOnly
                      className="w-12 border-x text-center py-2"
                    />
                    <button
                      onClick={handleIncreaseQuantity}
                      className="px-3 py-2 text-scale-navy hover:bg-gray-100"
                      disabled={quantity >= product.stock}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-scale-gray mb-1">
                    Total Price
                  </p>
                  <p className="text-lg font-bold text-scale-navy">
                    ${((product.discountedPrice || product.price) * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button onClick={handleAddToCart} className="flex-1 bg-scale-navy hover:bg-scale-navy/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </Button>
                <Button onClick={handleBuyNow} className="flex-1 bg-scale-teal hover:bg-scale-teal/90">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="px-6 pb-10">
        <div className="border-b mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'description'
                  ? 'border-scale-teal text-scale-teal'
                  : 'border-transparent text-scale-gray hover:text-scale-navy'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'features'
                  ? 'border-scale-teal text-scale-teal'
                  : 'border-transparent text-scale-gray hover:text-scale-navy'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'specifications'
                  ? 'border-scale-teal text-scale-teal'
                  : 'border-transparent text-scale-gray hover:text-scale-navy'
              }`}
            >
              Specifications
            </button>
          </div>
        </div>
        
        <div className="animate-fade-in">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-scale-gray">{product.description}</p>
            </div>
          )}
          
          {activeTab === 'features' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-scale-navy">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-scale-teal mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-scale-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-scale-navy">Technical Specifications</h3>
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-scale-navy">
                          {key}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-scale-gray">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
