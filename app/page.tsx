import React from "react";
import Header from "./Layout/Header";
import Hero from "./Landing/Hero";
import Features from "./Landing/Features";
import ExtendedFeatures from "./Landing/ExtendedFeatures";
import Services from "./Landing/Services";
import Footer from "./Layout/Footer";
import Testimonials from "./Landing/Testimonials";
import FAQ from "./Landing/FAQ";
import Contact from "./Landing/Contact";
const Page: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mt-12 mx-auto  flex flex-col items-center max-w-7xl relative ">
        <header className="w-full">
          <Header />
        </header>

        <main>
          <Hero />
          <Features />
          <ExtendedFeatures />
          <Testimonials />
          <Services />
          <FAQ />
          <Contact />
        </main>
      </div>

      <footer className="w-full relative">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
