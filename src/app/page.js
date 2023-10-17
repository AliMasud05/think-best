import Gallery from "@/components/Shared/Gallery";
import Hero from "@/components/Shared/Hero";
import CardCarousel from "@/components/Shared/ReviewCarousel";
import ReviewCarousel from "@/components/Shared/ReviewCarousel";
import About from "./about/page";
import AboutPage from "@/components/Shared/About";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <div className="my-8">
        <h1 className="text-center my-5">Customer Reviews</h1>
        <CardCarousel />
        <AboutPage />
      </div>
    </div>
  );
};

export default HomePage;
