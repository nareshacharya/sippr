import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';

export default function NutritionPage() {
  const nutritionBenefits = [
    {
      icon: 'ri-heart-pulse-fill',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      title: 'Cardiovascular Health',
      description: 'Rich in antioxidants and potassium that support heart health, improve blood circulation, and help maintain healthy blood pressure levels.'
    },
    {
      icon: 'ri-brain-fill',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      title: 'Mental Clarity',
      description: 'Natural vitamins and minerals boost cognitive function, enhance focus, and provide sustained mental energy throughout your day.'
    },
    {
      icon: 'ri-shield-check-fill',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      title: 'Immune Boost',
      description: 'Packed with vitamin C, zinc, and phytonutrients that strengthen your immune system and protect against seasonal illnesses.'
    },
    {
      icon: 'ri-flashlight-fill',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      title: 'Natural Energy',
      description: 'Complex carbohydrates and natural sugars provide clean, sustained energy without the crash of processed alternatives.'
    },
    {
      icon: 'ri-contrast-drop-fill',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      title: 'Hydration & Detox',
      description: 'High water content and natural enzymes help flush toxins, support kidney function, and keep you optimally hydrated.'
    },
    {
      icon: 'ri-sparkling-fill',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      title: 'Radiant Skin',
      description: 'Vitamins A, C, and E promote collagen production, reduce inflammation, and give you that natural, healthy glow.'
    }
  ];

  const ingredients = [
    {
      name: 'Fresh Fruits',
      items: ['Oranges', 'Apples', 'Berries', 'Pineapple', 'Watermelon', 'Pomegranate'],
      image: 'https://readdy.ai/api/search-image?query=Colorful%20assortment%20of%20fresh%20tropical%20fruits%20including%20oranges%20apples%20berries%20pineapple%20watermelon%20pomegranate%20arranged%20beautifully%20on%20clean%20white%20surface%2C%20vibrant%20colors%2C%20natural%20lighting%2C%20healthy%20food%20photography&width=400&height=300&seq=nutrition1&orientation=landscape'
    },
    {
      name: 'Leafy Greens',
      items: ['Spinach', 'Kale', 'Celery', 'Cucumber', 'Mint', 'Parsley'],
      image: 'https://readdy.ai/api/search-image?query=Fresh%20green%20vegetables%20including%20spinach%20kale%20celery%20cucumber%20mint%20parsley%20on%20clean%20white%20background%2C%20vibrant%20green%20colors%2C%20healthy%20organic%20produce%2C%20minimalist%20food%20photography&width=400&height=300&seq=nutrition2&orientation=landscape'
    },
    {
      name: 'Superfoods',
      items: ['Ginger', 'Turmeric', 'Beetroot', 'Carrots', 'Chia Seeds', 'Spirulina'],
      image: 'https://readdy.ai/api/search-image?query=Superfood%20ingredients%20ginger%20turmeric%20beetroot%20carrots%20chia%20seeds%20spirulina%20powder%20arranged%20on%20white%20surface%2C%20natural%20health%20foods%2C%20vibrant%20colors%2C%20clean%20minimalist%20photography&width=400&height=300&seq=nutrition3&orientation=landscape'
    }
  ];

  const nutritionalValues = [
    { nutrient: 'Vitamin C', amount: '150-200%', benefit: 'Daily Value' },
    { nutrient: 'Vitamin A', amount: '80-120%', benefit: 'Daily Value' },
    { nutrient: 'Potassium', amount: '400-600mg', benefit: 'Per Serving' },
    { nutrient: 'Fiber', amount: '3-5g', benefit: 'Per Serving' },
    { nutrient: 'Antioxidants', amount: 'High', benefit: 'ORAC Value' },
    { nutrient: 'Calories', amount: '120-180', benefit: 'Per Serving' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-green-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Nutrition That <span className="text-[#C34479]">Powers</span> Your Life
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Every SIPPR juice is carefully crafted to deliver maximum nutrition without compromise. 
                We believe in the power of real, whole ingredients to transform your health and energy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary"
                  href="https://wa.me/918309209564"
                  icon={<i className="ri-whatsapp-fill"></i>}
                >
                  Order Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.scrollTo({ top: document.getElementById('benefits')?.offsetTop || 0, behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Vibrant%20cold%20pressed%20juice%20bottles%20with%20fresh%20fruits%20and%20vegetables%20surrounding%20them%2C%20colorful%20healthy%20drinks%2C%20nutritious%20ingredients%2C%20clean%20white%20background%2C%20professional%20food%20photography%2C%20appealing%20presentation&width=600&height=700&seq=nutritionhero&orientation=portrait"
                alt="Nutritious cold-pressed juices"
                className="rounded-3xl shadow-2xl object-cover object-top w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Health <span className="text-[#C34479]">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how SIPPR's cold-pressed juices support your body's natural functions 
              and help you achieve optimal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutritionBenefits.map((benefit, index) => (
              <Card key={index} className={`p-8 ${benefit.bgColor} border-none hover:shadow-xl transition-all duration-300`}>
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`${benefit.icon} text-3xl ${benefit.color}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20juice%20bar%20with%20fresh%20fruits%20and%20vegetables%20being%20prepared%2C%20cold%20press%20machine%20in%20action%2C%20natural%20ingredients%20displayed%20beautifully%2C%20clean%20kitchen%20environment%2C%20healthy%20food%20preparation%20process%2C%20professional%20setting&width=600&height=500&seq=philosophy&orientation=portrait"
                alt="Fresh ingredients and cold press process"
                className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C34479] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Natural</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Nutrition <span className="text-[#C34479]">Philosophy</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    <i className="ri-heart-pulse-fill text-red-500 mr-2"></i>
                    Health Without Compromise
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nutrition should never come at the cost of health. At SIPPR, we don't add sugar, water, 
                    preservatives or concentrate. Everything is cold-pressed or freshly made to give your body 
                    clean, real energy.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    <i className="ri-rainbow-fill text-[#C34479] mr-2"></i>
                    Exciting Combinations Promise
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Healthy food shouldn't be boring. SIPPR creates combinations that delight your taste buds 
                    while energizing your day. Every sip is an adventure in flavor and nutrition.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    <i className="ri-leaf-fill text-green-500 mr-2"></i>
                    Pure Ingredients Promise
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fresh, real, unprocessed ingredients sourced with care. No shortcuts, no artificial flavors, 
                    just nature's goodness delivered in every glass.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Premium <span className="text-[#C34479]">Ingredients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We source only the finest, freshest ingredients to ensure every juice delivers 
              maximum nutrition and incredible taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ingredients.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-pink-50 text-[#C34479] rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Values Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nutritional <span className="text-[#C34479]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each serving of SIPPR juice is packed with essential vitamins, minerals, and nutrients 
              your body needs to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionalValues.map((item, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{item.nutrient}</h4>
                    <p className="text-sm text-gray-600">{item.benefit}</p>
                  </div>
                  <div className="text-3xl font-bold text-[#C34479]">{item.amount}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-information-fill text-2xl text-yellow-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Important Note</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nutritional values may vary based on the specific juice blend and seasonal ingredient availability. 
                  All our juices are made fresh daily with no added sugars, preservatives, or artificial ingredients. 
                  For specific dietary requirements or allergen information, please contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C34479]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the difference that real, nutrient-dense ingredients can make in your life. 
            Order your first SIPPR juice now!
          </p>
          <Button 
            variant="whatsapp"
            href="https://wa.me/918309209564"
            icon={<i className="ri-whatsapp-fill"></i>}
            className="text-lg px-8 py-4"
          >
            Order on WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
