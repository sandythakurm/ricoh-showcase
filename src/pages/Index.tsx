import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesBar from "@/components/ServicesBar";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import RicohPartnership from "@/components/RicohPartnership";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ServicesBar />
    <FeaturedProducts />
    <RicohPartnership />
    <BrandsSection />
    <CategoriesSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
