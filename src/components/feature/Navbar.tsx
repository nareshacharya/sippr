import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true); // Always solid on other pages
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About', path: '/about' },
    { label: 'Nutrition', path: '/nutrition' },
    { label: 'Contact', path: '/contact' }
  ];

  const isTransparent = isHomePage && !isScrolled;
  const navBgClass = isTransparent 
    ? 'bg-transparent backdrop-blur-sm' 
    : 'bg-white shadow-lg';
  const textColorClass = isTransparent ? 'text-white' : 'text-gray-700';

  return (
    <nav className={`${navBgClass} sticky top-0 z-50 transition-all duration-300 ${isTransparent ? 'pb-2' : ''}`}>
      {/* Logo - Absolute positioned, sticking out */}
      <div className="absolute left-2 sm:left-4 md:left-8 z-50" style={{ top: '-6px' }}>
        <div 
          className="bg-white rounded-b-full p-2 sm:p-3 md:p-4 shadow-2xl w-18 h-18 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center cursor-pointer transition-all duration-300"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        >
          <img 
            src="/sippr-logo.svg" 
            alt="SIPPR Logo" 
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${isTransparent ? 'h-12 sm:h-14 md:h-16' : 'h-14 sm:h-16 md:h-18'}`}>
          {/* Empty space for logo */}
          <div className="w-20 sm:w-28 md:w-36"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className={`${textColorClass} hover:text-[#C34479] font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap text-sm lg:text-base drop-shadow-sm`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button 
              variant="whatsapp" 
              href="https://wa.me/918309209564"
              icon={<i className="ri-whatsapp-fill"></i>}
            >
              <span className="hidden lg:inline">Order on WhatsApp</span>
              <span className="lg:hidden">Order</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColorClass} hover:text-[#C34479] cursor-pointer p-2 transition-colors duration-200`}
              aria-label="Toggle menu"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl drop-shadow-sm`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 ${isTransparent ? 'border-t border-white/20' : 'border-t border-gray-200'}`}>
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className={`block w-full text-left px-4 py-3 ${textColorClass} hover:text-[#C34479] ${isTransparent ? 'hover:bg-white/10' : 'hover:bg-pink-50'} cursor-pointer whitespace-nowrap transition-colors duration-200`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button 
                variant="whatsapp" 
                href="https://wa.me/918309209564"
                icon={<i className="ri-whatsapp-fill"></i>}
                className="w-full"
              >
                Order on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
