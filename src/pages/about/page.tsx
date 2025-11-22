
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';

export default function About() {
  const values = [
    {
      icon: 'ri-heart-pulse-fill',
      title: 'Health First',
      description: 'Every ingredient is chosen for its nutritional value and health benefits. No compromises on quality.'
    },
    {
      icon: 'ri-leaf-fill', 
      title: 'Natural Goodness',
      description: 'Fresh, real, unprocessed ingredients sourced with care. Nature\'s nutrition in every sip.'
    },
    {
      icon: 'ri-rainbow-fill',
      title: 'Exciting Flavors',
      description: 'Healthy doesn\'t mean boring. We create combinations that delight your taste buds.'
    },
    {
      icon: 'ri-time-fill',
      title: 'Busy Lifestyle Friendly',
      description: 'Quick nutrition for people on the go. Fuel your day without slowing down.'
    }
  ];

  const story = [
    {
      title: 'The Beginning',
      description: 'SIPPR was born from a simple belief: nutrition shouldn\'t be boring or compromise your health. Founded in Hyderabad, we started with a mission to make healthy choices taste amazing.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20juice%20bar%20startup%20story%20with%20fresh%20fruits%20and%20vegetables%2C%20entrepreneurs%20working%20with%20cold%20press%20machines%2C%20vibrant%20healthy%20ingredients%2C%20inspiring%20business%20beginning%20atmosphere&width=500&height=400&seq=32&orientation=landscape'
    },
    {
      title: 'The Mission',
      description: 'Provide right nutrition without compromising health — and without serving boring, bland flavors. Busy lifestyles deserve nutrition that tastes amazing and energizes your day.',
      image: 'https://readdy.ai/api/search-image?query=Mission%20focused%20team%20preparing%20fresh%20cold%20pressed%20juices%2C%20diverse%20customers%20enjoying%20healthy%20drinks%2C%20community%20wellness%20and%20nutrition%20education%2C%20inspiring%20health%20mission%20concept&width=500&height=400&seq=33&orientation=landscape'
    },
    {
      title: 'The Promise',
      description: 'No added sugar, no added water, not from concentrate. Every drink is cold-pressed or freshly made to give your body clean, real energy that you can trust.',
      image: 'https://readdy.ai/api/search-image?query=Quality%20promise%20with%20fresh%20ingredients%20being%20cold%20pressed%2C%20pure%20natural%20juices%20in%20bottles%2C%20clean%20preparation%20process%2C%20trust%20and%20quality%20assurance%20concept&width=500&height=400&seq=34&orientation=landscape'
    }
  ];

  const team = [
    {
      name: 'Nutrition Team',
      role: 'Recipe Development',
      description: 'Creating perfect flavor combinations that maximize nutrition and taste.',
      icon: 'ri-user-heart-fill'
    },
    {
      name: 'Quality Team',
      role: 'Ingredient Sourcing', 
      description: 'Ensuring every ingredient meets our high standards for freshness and quality.',
      icon: 'ri-award-fill'
    },
    {
      name: 'Customer Care',
      role: 'Your Wellness Partners',
      description: 'Helping you find the perfect nutrition solution for your lifestyle needs.',
      icon: 'ri-customer-service-2-fill'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="py-12 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Modern%20healthy%20juice%20bar%20interior%20with%20fresh%20fruits%20vegetables%20and%20cold%20press%20equipment%2C%20bright%20natural%20lighting%2C%20welcoming%20atmosphere%2C%20SIPPR%20brand%20story%20background&width=1200&height=600&seq=35&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
              About <span className="text-pink-400">SIPPR</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
              Born in Hyderabad with a passion for making healthy nutrition taste incredible. 
              We're on a mission to power up your day with real, fresh, exciting flavors.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              Our <span className="text-[#C34479]">Story</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From a simple idea to Hyderabad's favorite nutrition destination. 
              Discover how SIPPR is changing the way people think about healthy food.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {story.map((chapter, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-2 lg:order-1`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{chapter.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{chapter.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} order-1 lg:order-2`}>
                  <img 
                    src={chapter.image}
                    alt={chapter.title}
                    className="rounded-2xl shadow-2xl object-cover object-top w-full min-h-[250px] sm:min-h-[300px] md:h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              Our <span className="text-[#C34479]">Values</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do at SIPPR. 
              From ingredient selection to customer service, these values shape our approach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} hover className="p-6 sm:p-7 md:p-8 text-center h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 bg-[#C34479] rounded-full flex items-center justify-center">
                  <i className={`${value.icon} text-xl sm:text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6">
              Meet Our <span className="text-[#C34479]">Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The passionate people behind SIPPR who work every day to bring you 
              the freshest, most nutritious, and delicious drinks in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="p-6 sm:p-7 md:p-8 text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 bg-[#C34479] rounded-full flex items-center justify-center">
                  <i className={`${member.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <h4 className="text-[#C34479] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#C34479]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
            Join the SIPPR Family
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto px-4">
            Be part of a community that believes nutrition should be delicious, convenient, and never boring. 
            Start your wellness journey with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              variant="whatsapp"
              size="lg"
              href="https://wa.me/918309209564"
              icon={<i className="ri-whatsapp-fill"></i>}
              className="bg-green-600 hover:bg-green-700"
            >
              Start Ordering
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              href="/menu"
              icon={<i className="ri-restaurant-fill"></i>}
              className="bg-white text-[#C34479] hover:bg-gray-100"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
