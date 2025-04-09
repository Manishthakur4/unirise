import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMobile();

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
      <nav className="scale-container flex items-center justify-between py-2">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/dcc1d0ed-5a7f-435e-82de-efb15657ee19.png" 
            alt="Unirise Logo" 
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-gray-700 hover:text-unirise-red font-semibold transition duration-200 px-3 py-2 rounded-md ${
                isActive(item.path) ? 'text-unirise-red' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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
