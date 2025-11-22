import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../base/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About', path: '/about' },
    { label: 'Nutrition', path: '/nutrition' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Logo - Absolute positioned, sticking out */}
      <div className="absolute left-8 top-0 z-50">
        <div 
          className="bg-white rounded-b-full p-4 shadow-2xl w-36 h-36 flex items-center justify-center cursor-pointer transform translate-y-2"
          onClick={() => navigate('/')}
        >
          <img 
            src="https://static.readdy.ai/image/dbeb91d70bf7c7ea8c36eb3ec2049dba/10f23f08ab70e07735f36c493ebd6b90.png" 
            alt="SIPPR Logo" 
            className="h-28 w-28 object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty space for logo */}
          <div className="w-32"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-gray-700 hover:text-[#C34479] font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
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
              Order on WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#C34479] cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#C34479] hover:bg-pink-50 cursor-pointer whitespace-nowrap"
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
