import { nutritionFacts } from '../../../mocks/menuData';

export default function WhySipprSection() {
  const benefits = [
    {
      icon: 'ri-leaf-fill',
      title: 'Maximum Nutrition',
      description: 'Cold pressing retains more vitamins, minerals, and enzymes that heat destroys, giving you the most nutritious juice possible'
    },
    {
      icon: 'ri-flashlight-fill',
      title: 'Better Absorption',
      description: 'Your body absorbs nutrients faster from cold pressed juices, providing quick energy and nourishment when you need it most'
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Boosts Immunity & Digestion',
      description: 'High concentration of vitamins strengthens your immune system while natural enzymes support digestive health and gut wellness'
    },
    {
      icon: 'ri-heart-pulse-fill',
      title: 'Natural Detoxification',
      description: 'Pure ingredients help cleanse your body naturally, flushing out toxins while nourishing your cells with essential nutrients'
    },
    {
      icon: 'ri-sparkling-fill',
      title: 'Radiant Skin & Energy',
      description: 'Antioxidants and vitamins promote healthy, glowing skin while providing sustained energy throughout your day without the crash'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Why Choose <span className="text-[#C34479]">SIPPR?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the difference of cold-pressed nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://readdy.ai/api/search-image?query=Fresh%20cold%20pressed%20juice%20bottles%20with%20vibrant%20fruits%20on%20clean%20white%20marble%20surface%2C%20minimalist%20product%20photography%2C%20soft%20natural%20lighting%2C%20professional%20studio%20shot%2C%20clean%20composition%20with%20lots%20of%20negative%20space%2C%20elegant%20and%20simple%20aesthetic&width=600&height=700&seq=why-sippr-hero&orientation=portrait"
              alt="Cold Pressed Juices"
              className="w-full h-full object-cover object-top rounded-2xl shadow-2xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            />
          </div>

          {/* Benefits Side */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C34479] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${benefit.icon} text-white text-lg sm:text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
