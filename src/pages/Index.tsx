import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/home/HeroSection";
import BannerSection from "@/components/home/BannerSection";
import SeoIntro from "@/components/home/SeoIntro";
import SimulatorSection from "@/components/home/SimulatorSection";
import PrestationsSection from "@/components/home/PrestationsSection";
import GallerySection from "@/components/home/GallerySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <BannerSection />
      <SeoIntro />
      <PrestationsSection />
      <SimulatorSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    </main>
    <FloatingCTA />
    <Footer />
  </>
);

export default Index;
