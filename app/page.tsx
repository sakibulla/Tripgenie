import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import PopularDestinations from "@/components/home/PopularDestinations";
import Categories from "@/components/home/Categories";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularDestinations />
      <Categories />
      <Stats />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}