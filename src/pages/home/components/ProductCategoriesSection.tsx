
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { useNavigate } from 'react-router-dom';

export default function ProductCategoriesSection() {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Cold Pressed Juices',
      description: 'Pure, nutrient-rich juices extracted with gentle pressure',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20cold%20pressed%20green%20juice%20in%20elegant%20glass%20bottle%20on%20dark%20wooden%20table%20with%20soft%20moody%20lighting%2C%20deep%20green%20and%20amber%20tones%2C%20professional%20food%20photography%20with%20rich%20shadows%20and%20warm%20atmosphere&width=400&height=300&seq=41&orientation=landscape'
    },
    {
      name: 'Smoothies',
      description: 'Creamy, protein-rich blends for sustained energy',
      image: 'https://readdy.ai/api/search-image?query=Creamy%20berry%20smoothie%20in%20tall%20glass%20on%20dark%20slate%20surface%20with%20scattered%20berries%2C%20moody%20purple%20and%20pink%20tones%2C%20dramatic%20lighting%2C%20professional%20beverage%20photography%20with%20rich%20deep%20colors&width=400&height=300&seq=42&orientation=landscape'
    },
    {
      name: 'Blended Juices',
      description: 'Perfectly balanced fruit and vegetable combinations',
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20orange%20carrot%20juice%20in%20glass%20on%20dark%20rustic%20background%20with%20fresh%20carrots%20and%20oranges%2C%20warm%20golden%20tones%2C%20moody%20professional%20food%20photography%20with%20deep%20shadows&width=400&height=300&seq=43&orientation=landscape'
    },
    {
      name: 'Yogurt Bowls',
      description: 'Probiotic-rich bowls with fresh fruits and superfoods',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20acai%20yogurt%20bowl%20with%20colorful%20toppings%20on%20dark%20marble%20surface%2C%20deep%20purple%20and%20pink%20colors%2C%20moody%20lighting%2C%20professional%20food%20photography%20with%20rich%20contrast&width=400&height=300&seq=44&orientation=landscape'
    },
    {
      name: 'Toasts',
      description: 'Nutritious artisan toasts with fresh, wholesome toppings',
      image: 'https://readdy.ai/api/search-image?query=Avocado%20toast%20on%20artisan%20bread%20on%20dark%20wooden%20board%20with%20rustic%20background%2C%20rich%20green%20and%20brown%20tones%2C%20moody%20professional%20food%20photography%20with%20warm%20dramatic%20lighting&width=400&height=300&seq=45&orientation=landscape'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#C34479]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
            Our <span className="text-pink-100">Categories</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
            From cold-pressed juices to protein smoothies, we have something delicious 
            and nutritious for every taste and lifestyle.
          </p>
        </div>

        {/* Mosaic Layout - Contained with rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 rounded-2xl overflow-hidden">
          {/* Row 1: Large + Small + Small */}
          <div className="md:row-span-2 relative group overflow-hidden cursor-pointer" onClick={() => navigate('/menu')}>
            <img 
              src={categories[0].image} 
              alt={categories[0].name}
              className="w-full h-full object-cover object-top min-h-[300px] sm:min-h-[400px] md:min-h-[600px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">{categories[0].name}</h3>
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6">{categories[0].description}</p>
              <Button variant="secondary" size="sm" className="text-xs sm:text-sm">View Items</Button>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer" onClick={() => navigate('/menu')}>
            <img 
              src={categories[1].image} 
              alt={categories[1].name}
              className="w-full h-full object-cover object-top min-h-[250px] sm:min-h-[300px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{categories[1].name}</h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{categories[1].description}</p>
              <Button variant="secondary" size="sm" className="text-xs">View Items</Button>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer" onClick={() => navigate('/menu')}>
            <img 
              src={categories[2].image} 
              alt={categories[2].name}
              className="w-full h-full object-cover object-top min-h-[250px] sm:min-h-[300px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{categories[2].name}</h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{categories[2].description}</p>
              <Button variant="secondary" size="sm" className="text-xs">View Items</Button>
            </div>
          </div>

          {/* Row 2: Small + Small (next to the large one) */}
          <div className="relative group overflow-hidden cursor-pointer" onClick={() => navigate('/menu')}>
            <img 
              src={categories[3].image} 
              alt={categories[3].name}
              className="w-full h-full object-cover object-top min-h-[250px] sm:min-h-[300px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{categories[3].name}</h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{categories[3].description}</p>
              <Button variant="secondary" size="sm" className="text-xs">View Items</Button>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer" onClick={() => navigate('/menu')}>
            <img 
              src={categories[4].image} 
              alt={categories[4].name}
              className="w-full h-full object-cover object-top min-h-[250px] sm:min-h-[300px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{categories[4].name}</h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{categories[4].description}</p>
              <Button variant="secondary" size="sm" className="text-xs">View Items</Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/menu')}
            icon={<i className="ri-arrow-right-line"></i>}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
