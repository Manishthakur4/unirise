
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { toast } from '@/components/ui/use-toast';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleContactClick = () => {
    toast({
      title: "Contact form opened",
      description: `You're interested in ${product.name}. Please fill out the contact form.`,
    });
    // Navigate to contact page with product info in URL params
    navigate(`/contact?product=${product.id}&name=${encodeURIComponent(product.name)}`);
  };

  const handleRequestQuote = () => {
    toast({
      title: "Quote request",
      description: `Thank you for your interest in ${product.name}. Our team will contact you shortly.`,
    });
    // Navigate to contact page with quote request flag
    navigate(`/contact?product=${product.id}&name=${encodeURIComponent(product.name)}&quote=true`);
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
            <Link to="/" className="text-gray-600 hover:text-unirise-red">
              Home
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="flex items-center">
            <Link to="/products" className="text-gray-600 hover:text-unirise-red">
              Products
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="flex items-center text-unirise-red font-medium">
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
                  selectedImage === image ? 'border-unirise-red ring-2 ring-unirise-red/20' : 'border-gray-200 hover:border-unirise-red/50'
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
              <span className="uppercase text-xs font-medium text-unirise-red bg-unirise-red/10 px-2 py-1 rounded">
                {product.category}
              </span>
              {product.stock < 10 && (
                <span className="uppercase text-xs font-medium text-unirise-accent bg-unirise-accent/10 px-2 py-1 rounded ml-2">
                  Limited Availability
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            
            <div className="flex items-center mt-2">
              {renderStars(product.rating)}
              <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-600">Model: {product.specifications.model || 'Standard'}</span>
            </div>
            
            <div className="mt-4">
              {product.discountedPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-800">${product.discountedPrice.toFixed(2)}</span>
                  <span className="ml-3 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-white bg-unirise-accent px-2 py-0.5 rounded-md">
                    {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="border-t border-b py-4 my-6">
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="space-y-4">              
              <div className="flex space-x-4">
                <Button onClick={handleContactClick} className="flex-1 bg-unirise-red hover:bg-unirise-red/90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Button>
                <Button onClick={handleRequestQuote} className="flex-1 bg-unirise-light hover:bg-unirise-light/90">
                  Request Quote
                </Button>
              </div>
              
              <div className="flex items-center justify-center mt-6 p-4 bg-gray-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-unirise-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">
                  For bulk orders or custom requirements, please contact our sales team directly.
                </span>
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
                  ? 'border-unirise-red text-unirise-red'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'features'
                  ? 'border-unirise-red text-unirise-red'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'specifications'
                  ? 'border-unirise-red text-unirise-red'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Specifications
            </button>
          </div>
        </div>
        
        <div className="animate-fade-in">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}
          
          {activeTab === 'features' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-unirise-red mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Technical Specifications</h3>
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {key}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
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
