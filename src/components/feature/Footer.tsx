
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <img 
              src="/sippr-logo.svg" 
              alt="SIPPR Logo" 
              className="h-12 sm:h-14 md:h-16 w-auto mb-3 sm:mb-4"
            />
            <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg">
              POWER UP YOUR DAY!
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Provide right nutrition without compromising health — and without serving boring, bland flavors. 
              Busy lifestyles deserve nutrition that tastes amazing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Nutrition', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="text-gray-400 hover:text-[#C34479] transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <i className="ri-phone-fill text-[#C34479] mr-2 sm:mr-3 text-sm sm:text-base"></i>
                <span className="text-gray-300 text-sm sm:text-base">8309209564</span>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-fill text-[#C34479] mr-2 sm:mr-3 text-sm sm:text-base"></i>
                <span className="text-gray-300 text-sm sm:text-base">Hyderabad, India</span>
              </div>
              <div className="flex items-center">
                <i className="ri-whatsapp-fill text-green-500 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                <a 
                  href="https://wa.me/918309209564"
                  className="text-gray-300 hover:text-green-500 transition-colors text-sm sm:text-base"
                >
                  WhatsApp Orders
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 SIPPR - A unit of SHRU MULTITRADE LLP. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-[#C34479] text-xs sm:text-sm transition-colors mt-2 md:mt-0"
          >
            &nbsp;
          </a>
        </div>
      </div>
    </footer>
  );
}
