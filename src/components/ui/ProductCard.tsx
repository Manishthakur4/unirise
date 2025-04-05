
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { id, name, category, price, discountedPrice, rating, image, isFeatured, isNewArrival } = product;

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
    <div className={`group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl ${featured ? 'border-2 border-scale-teal' : ''}`}>
      <div className="relative">
        <Link to={`/product/${id}`}>
          <div className="overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {isNewArrival && (
            <div className="absolute top-4 left-4 bg-scale-orange text-white px-2 py-1 rounded-md text-sm font-medium">
              New Arrival
            </div>
          )}
          {isFeatured && !isNewArrival && (
            <div className="absolute top-4 left-4 bg-scale-teal text-white px-2 py-1 rounded-md text-sm font-medium">
              Featured
            </div>
          )}
        </Link>
      </div>
      
      <div className="p-5">
        <Link to={`/product/${id}`}>
          <div className="mb-2">
            <span className="text-xs font-medium uppercase text-scale-gray">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
            <h3 className="text-lg font-bold text-scale-navy group-hover:text-scale-teal transition-colors">
              {name}
            </h3>
          </div>
          
          <div className="flex items-center mb-3">
            {renderStars(rating)}
            <span className="ml-2 text-scale-gray text-sm">({rating.toFixed(1)})</span>
          </div>
          
          <div className="flex items-center mb-4">
            {discountedPrice ? (
              <>
                <span className="text-xl font-bold text-scale-navy">${discountedPrice.toFixed(2)}</span>
                <span className="ml-2 text-scale-gray line-through">${price.toFixed(2)}</span>
                <span className="ml-2 text-sm text-white bg-scale-orange px-2 py-0.5 rounded-md">
                  {Math.round(((price - discountedPrice) / price) * 100)}% OFF
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-scale-navy">${price.toFixed(2)}</span>
            )}
          </div>
        </Link>
        
        <div className="flex space-x-2">
          <Button asChild className="flex-1 bg-scale-navy hover:bg-scale-navy/90">
            <Link to={`/product/${id}`}>View Details</Link>
          </Button>
          <Button className="bg-scale-teal hover:bg-scale-teal/90" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
