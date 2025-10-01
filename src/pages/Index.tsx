import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import MachinerySection from "@/components/MachinerySection";
import DirectorProfile from "@/components/DirectorProfile";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ProductShowcase />
      <MachinerySection />
      <DirectorProfile />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
