import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';
import { coldPressedJuices, smoothies, yogurtBowls } from '../../../mocks/menuData';

export default function FeaturedItemsSection() {
  const featuredItems = [
    ...coldPressedJuices.slice(0, 2),
    ...smoothies.slice(0, 2), 
    ...yogurtBowls.slice(0, 2)
  ];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      immunity: 'bg-green-100 text-green-800',
      detox: 'bg-purple-100 text-purple-800',
      energy: 'bg-[#C34479]/10 text-[#C34479]',
      protein: 'bg-blue-100 text-blue-800',
      antioxidant: 'bg-red-100 text-red-800',
      hydration: 'bg-cyan-100 text-cyan-800',
      probiotics: 'bg-pink-100 text-pink-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-[#C34479]">Favorites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular items loved by customers for their incredible taste and nutrition benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.id} hover className="overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover object-top"
                />
                {item.price && (
                  <div className="absolute top-4 right-4 bg-[#C34479] text-white px-3 py-1 rounded-full font-bold">
                    ₹{item.price}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Ingredients:</strong> {item.ingredients.join(', ')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Benefits:</strong> {item.benefits.join(', ')}
                  </p>
                </div>

                <Button 
                  variant="whatsapp" 
                  size="sm"
                  href="https://wa.me/918309209564"
                  className="w-full"
                  icon={<i className="ri-whatsapp-fill"></i>}
                >
                  Order Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
