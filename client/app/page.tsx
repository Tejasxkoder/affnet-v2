import Navbar from "@/components/common/navbar";
import Hero from "@/sections/home/hero";
import Stats from "@/sections/home/stats";
import FeaturedProperties from "@/sections/home/featured-properties";
import Services from "@/sections/home/services";
import WhyChooseUs from "@/sections/home/why-choose-us";
import Testimonials from "@/sections/home/testimonials";
import CTA from "@/sections/home/CTA";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Stats/>
  <FeaturedProperties/>
  <Services/>
  <WhyChooseUs/>
  <Testimonials />
  <CTA/>
  <Footer/>
  </>
  );
}
