import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import WhySipprSection from './components/WhySipprSection';
import ProductCategoriesSection from './components/ProductCategoriesSection';
import FeaturedItemsSection from './components/FeaturedItemsSection';
import NutritionPhilosophySection from './components/NutritionPhilosophySection';
import CustomerPersonasSection from './components/CustomerPersonasSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductCategoriesSection />
      <WhySipprSection />
      <FeaturedItemsSection />
      <NutritionPhilosophySection />
      <CustomerPersonasSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
