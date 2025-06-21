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
import Portfolio from "./Landing/Portfolio";
const Page: React.FC = () => {
  return (
    <div className="w-full overflow-hidden  bg-background">
      <div className="mt-12 mx-auto  flex flex-col items-center max-w-7xl relative w-full">
        <header className="w-full">
          <Header />
        </header>

        <main>
          <Hero />
          <Features />
          <div id="Portfolio">
            <Portfolio />
          </div>
          <ExtendedFeatures />
          <div id="Testimonials">
            <Testimonials />
          </div>
          <div id="Services">
            <Services />
          </div>
          <div id="Faq">
            {" "}
            <FAQ />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </main>
      </div>

      <footer className="w-full relative">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
