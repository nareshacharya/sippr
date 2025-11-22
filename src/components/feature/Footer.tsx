
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/dbeb91d70bf7c7ea8c36eb3ec2049dba/10f23f08ab70e07735f36c493ebd6b90.png" 
              alt="SIPPR Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 text-lg">
              POWER UP YOUR DAY!
            </p>
            <p className="text-gray-400 leading-relaxed">
              Provide right nutrition without compromising health — and without serving boring, bland flavors. 
              Busy lifestyles deserve nutrition that tastes amazing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Nutrition', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                    className="text-gray-400 hover:text-[#C34479] transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="ri-phone-fill text-[#C34479] mr-3"></i>
                <span className="text-gray-300">8309209564</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-fill text-[#C34479] mr-3"></i>
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
              <div className="flex items-center">
                <i className="ri-whatsapp-fill text-green-500 mr-3"></i>
                <a 
                  href="https://wa.me/918309209564"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  WhatsApp Orders
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SIPPR. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-[#C34479] text-sm transition-colors mt-2 md:mt-0"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
