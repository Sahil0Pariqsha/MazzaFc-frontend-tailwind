import Image from "next/image";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Brands from "./_components/Brands";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import JobsCarousel from "./_components/JobsCarousel";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Brands />
      {/* <Projects /> */}
      <JobsCarousel />
      <Contact />
    </div>
  );
}
