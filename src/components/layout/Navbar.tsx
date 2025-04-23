
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { productCategories } from '@/data/productCategories';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="scale-container flex items-center justify-between py-2 relative">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/dcc1d0ed-5a7f-435e-82de-efb15657ee19.png" 
            alt="Unirise Logo" 
            className="h-24 w-auto object-contain" 
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {/* Main nav links, with hoverable Products menu */}
          {navItems.map((item) =>
            item.label === 'Products' ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                <button
                  type="button"
                  className={`text-gray-700 hover:text-unirise-red font-semibold transition duration-200 px-3 py-2 rounded-md flex items-center ${
                    isActive(item.path) ? 'text-unirise-red' : ''
                  }`}
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {productsMenuOpen && (
                  <div className="absolute left-0 top-full min-w-[320px] bg-white shadow-lg rounded-lg border z-50 mt-2">
                    <div className="p-4 w-full flex flex-col md:flex-row gap-4">
                      {/* Machine Types */}
                      <div>
                        <h4 className="text-sm font-semibold text-scale-navy mb-2">Machines</h4>
                        <ul>
                          {productCategories
                            .find(c => c.id === 'machine')
                            ?.subtypes.map(sub => (
                              <li key={sub.id}>
                                <button
                                  type="button"
                                  className="block text-left px-2 py-1 text-gray-700 hover:bg-scale-light w-full"
                                  onClick={() => {
                                    navigate(`/products?category=machine&subtype=${sub.id}`);
                                    setProductsMenuOpen(false);
                                  }}
                                >
                                  {sub.name}
                                </button>
                              </li>
                          ))}
                        </ul>
                      </div>
                      {/* Spare Part Types */}
                      <div>
                        <h4 className="text-sm font-semibold text-scale-navy mb-2">Spare Parts</h4>
                        <ul>
                          {productCategories
                            .find(c => c.id === 'spare-part')
                            ?.subtypes.map(sub => (
                              <li key={sub.id}>
                                <button
                                  type="button"
                                  className="block text-left px-2 py-1 text-gray-700 hover:bg-scale-light w-full"
                                  onClick={() => {
                                    navigate(`/products?category=spare-part&subtype=${sub.id}`);
                                    setProductsMenuOpen(false);
                                  }}
                                >
                                  {sub.name}
                                </button>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`text-gray-700 hover:text-unirise-red font-semibold transition duration-200 px-3 py-2 rounded-md ${
                  isActive(item.path) ? 'text-unirise-red' : ''
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Button asChild variant="outline">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-unirise-red hover:bg-red-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}

        {isMobile && (
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden z-50`}
          >
            <div className="p-4">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  className="text-gray-600 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block text-gray-700 hover:text-unirise-red font-semibold transition duration-200 px-4 py-2 rounded-md ${
                      isActive(item.path) ? 'text-unirise-red' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  variant="outline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
