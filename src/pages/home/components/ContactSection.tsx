

import Button from '../../../components/base/Button';
import Card from '../../../components/base/Card';

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#C34479]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
            Ready to Power Up Your Day?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Join thousands of health-conscious people who trust SIPPR for their daily nutrition. 
            Order now and taste the difference!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          <Card className="p-6 sm:p-7 md:p-8 text-center bg-white/95 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 bg-green-500 rounded-full flex items-center justify-center">
              <i className="ri-whatsapp-fill text-xl sm:text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">WhatsApp Orders</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">Quick and easy ordering via WhatsApp</p>
            <Button 
              variant="whatsapp"
              href="https://wa.me/918309209564"
              className="w-full"
            >
              Order Now
            </Button>
          </Card>

          <Card className="p-6 sm:p-7 md:p-8 text-center bg-white/95 backdrop-blur-sm">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 bg-[#C34479] rounded-full flex items-center justify-center">
              <i className="ri-phone-fill text-xl sm:text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Call Us</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">Speak directly with our team</p>
            <Button 
              variant="primary"
              href="tel:8309209564"
              className="w-full"
            >
              8309209564
            </Button>
          </Card>

          <Card className="p-6 sm:p-7 md:p-8 text-center bg-white/95 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill text-xl sm:text-2xl text-white"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Location</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">Serving fresh nutrition in Hyderabad</p>
            <Button 
              variant="outline"
              href="https://maps.google.com/?q=Hyderabad"
              className="w-full bg-white hover:bg-[#C34479] hover:text-white border-[#C34479] text-[#C34479]"
            >
              Hyderabad
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
            Follow us on social media for daily nutrition tips and special offers!
          </p>
          <div className="flex justify-center gap-3 sm:gap-4">
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Instagram"
            >
              <i className="ri-instagram-fill text-xl sm:text-2xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Facebook"
            >
              <i className="ri-facebook-fill text-xl sm:text-2xl text-white"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Twitter"
            >
              <i className="ri-twitter-fill text-xl sm:text-2xl text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
