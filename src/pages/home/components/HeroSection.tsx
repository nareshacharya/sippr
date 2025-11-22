
import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';
import FadeIn from '../../../components/animations/FadeIn';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      category: 'Cold Pressed Juices',
      title: 'PURE NUTRITION IN EVERY DROP',
      description: 'Experience the power of cold-pressed juices packed with vitamins, minerals, and natural goodness. No added sugar, no water, pure juice excellence.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20minimalist%20cold%20pressed%20juice%20bottle%20in%20sophisticated%20setting%20with%20soft%20natural%20lighting%2C%20clean%20white%20marble%20surface%2C%20fresh%20green%20leaves%20accent%2C%20professional%20product%20photography%2C%20muted%20tones%2C%20simple%20composition%20with%20negative%20space%2C%20luxury%20beverage%20aesthetic&width=1920&height=1080&seq=hero-juice-v2&orientation=landscape',
      color: 'text-[#C34479]',
      icon: 'ri-drop-fill',
      showLabels: true
    },
    {
      id: 2,
      category: 'Yogurt Bowls',
      title: 'FUEL YOUR MORNING RIGHT',
      description: 'Probiotic-rich yogurt bowls topped with fresh fruits, nuts, and superfoods. The perfect blend of taste, nutrition, and Instagram-worthy presentation.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20minimalist%20yogurt%20bowl%20with%20fresh%20berries%20on%20clean%20white%20marble%20surface%2C%20soft%20natural%20lighting%2C%20simple%20sophisticated%20composition%2C%20professional%20food%20photography%2C%20muted%20pastel%20tones%2C%20lots%20of%20negative%20space%2C%20luxury%20breakfast%20aesthetic&width=1920&height=1080&seq=hero-bowl-v2&orientation=landscape',
      color: 'text-purple-600',
      icon: 'ri-bowl-fill',
      showLabels: false
    },
    {
      id: 3,
      category: 'Artisan Toasts',
      title: 'WHOLESOME BITES OF GOODNESS',
      description: 'Nutrient-dense artisan toasts with fresh, premium toppings. From avocado to protein-packed options, every bite delivers satisfaction.',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20minimalist%20avocado%20toast%20on%20artisan%20bread%2C%20clean%20white%20marble%20surface%2C%20soft%20natural%20lighting%2C%20simple%20sophisticated%20composition%2C%20professional%20food%20photography%2C%20muted%20green%20tones%2C%20lots%20of%20negative%20space%2C%20luxury%20cafe%20aesthetic&width=1920&height=1080&seq=hero-toast-v2&orientation=landscape',
      color: 'text-green-600',
      icon: 'ri-cake-2-fill',
      showLabels: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Images with Transition */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.category}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
      ))}
      
      {/* Floating badges - Desktop: Top area, above gradient */}
      {currentSlideData.showLabels && (
        <div className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex flex-wrap justify-center gap-2 md:gap-3 px-4">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
            <span className="text-xs md:text-sm font-semibold text-green-600 whitespace-nowrap">✓ No Added Sugar</span>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
            <span className="text-xs md:text-sm font-semibold text-blue-600 whitespace-nowrap">✓ No Added Water</span>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
            <span className="text-xs md:text-sm font-semibold text-purple-600 whitespace-nowrap">✓ Not from Concentrate</span>
          </div>
        </div>
      )}

      {/* Content - Bottom Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 sm:pb-12 md:pb-16">
        <div className="text-center">
          {/* Category Label - Non-button style */}
          <FadeIn delay={100} direction="down">
            <div className="mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2">
                <i className={`${currentSlideData.icon} text-lg sm:text-xl md:text-2xl text-white`}></i>
                <span className="font-semibold text-base sm:text-lg md:text-xl text-white tracking-wide">
                  {currentSlideData.category}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Main Title */}
          <FadeIn delay={300}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 drop-shadow-lg leading-tight px-2">
              {currentSlideData.title}
            </h1>
          </FadeIn>

          {/* Labels - Mobile: Between title and description */}
          {currentSlideData.showLabels && (
            <div className="flex flex-wrap justify-center gap-2 mb-4 sm:hidden">
              <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-lg">
                <span className="text-xs font-semibold text-green-600 whitespace-nowrap">✓ No Added Sugar</span>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-lg">
                <span className="text-xs font-semibold text-blue-600 whitespace-nowrap">✓ No Added Water</span>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-lg">
                <span className="text-xs font-semibold text-purple-600 whitespace-nowrap">✓ Not from Concentrate</span>
              </div>
            </div>
          )}

          {/* Description */}
          <FadeIn delay={500}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md px-4">
              {currentSlideData.description}
            </p>
          </FadeIn>

          {/* CTA Button - Only Explore Menu */}
          <FadeIn delay={700}>
            <div className="flex justify-center mb-6 sm:mb-8">
              <Button 
                variant="primary" 
                size="lg"
                href="/menu"
                icon={<i className="ri-restaurant-fill"></i>}
              >
                Explore Menu
              </Button>
            </div>
          </FadeIn>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
      </button>
    </section>
  );
}
