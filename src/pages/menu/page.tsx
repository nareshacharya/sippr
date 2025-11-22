
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { coldPressedJuices, smoothies, blendedJuices, yogurtBowls, toasts } from '../../mocks/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: 'ri-restaurant-fill' },
    { id: 'juices', name: 'Cold Pressed Juices', icon: 'ri-drop-fill' },
    { id: 'smoothies', name: 'Smoothies', icon: 'ri-goblet-fill' },
    { id: 'blended', name: 'Blended Juices', icon: 'ri-cup-fill' },
    { id: 'bowls', name: 'Yogurt Bowls', icon: 'ri-bowl-fill' },
    { id: 'toasts', name: 'Toasts', icon: 'ri-cake-2-fill' }
  ];

  const allItems = [
    ...coldPressedJuices.map(item => ({ ...item, category: 'juices' })),
    ...smoothies.map(item => ({ ...item, category: 'smoothies' })),
    ...blendedJuices.map(item => ({ ...item, category: 'blended' })),
    ...yogurtBowls.map(item => ({ ...item, category: 'bowls' })),
    ...toasts.map(item => ({ ...item, category: 'toasts' }))
  ];

  const filteredItems = activeCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      immunity: 'bg-green-100 text-green-800',
      detox: 'bg-purple-100 text-purple-800',
      energy: 'bg-[#C34479]/10 text-[#C34479]',
      protein: 'bg-blue-100 text-blue-800',
      antioxidant: 'bg-red-100 text-red-800',
      hydration: 'bg-cyan-100 text-cyan-800',
      probiotics: 'bg-pink-100 text-pink-800',
      tropical: 'bg-yellow-100 text-yellow-800',
      vitamin: 'bg-indigo-100 text-indigo-800',
      savory: 'bg-amber-100 text-amber-800',
      comfort: 'bg-rose-100 text-rose-800',
      digestive: 'bg-lime-100 text-lime-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-[#C34479] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span style={{ fontFamily: '"Pacifico", serif' }}>Menu</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of fresh, nutritious, and delicious offerings. 
            From cold-pressed juices to protein-packed smoothies and wholesome bowls.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 flex items-center ${
                  activeCategory === category.id
                    ? 'bg-[#C34479] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} hover className="overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover object-top"
                    />
                    {item.price && (
                      <div className="absolute top-4 right-4 bg-[#C34479] text-white px-3 py-1 rounded-full font-bold text-sm">
                        ₹{item.price}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, index) => (
                        <span key={index} className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4 flex-1">
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Ingredients:</strong> {item.ingredients.join(', ')}
                      </p>
                      <p className="text-xs text-gray-600">
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
          ) : (
            <div className="text-center py-12">
              <i className="ri-search-line text-6xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#C34479]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us via WhatsApp for quick ordering or call us directly. 
            Fresh nutrition is just a message away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp"
              size="lg"
              href="https://wa.me/918309209564"
              icon={<i className="ri-whatsapp-fill"></i>}
              className="bg-green-600 hover:bg-green-700"
            >
              Order on WhatsApp
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              href="tel:8309209564"
              icon={<i className="ri-phone-fill"></i>}
              className="bg-white text-[#C34479] hover:bg-gray-100"
            >
              Call: 8309209564
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
