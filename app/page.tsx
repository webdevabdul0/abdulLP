import React from "react";
import Header from "./Layout/Header";
import Hero from "./Landing/Hero";
import Features from "./Landing/Features";
import ExtendedFeatures from "./Landing/ExtendedFeatures";
import Services from "./Landing/Services";
const Page: React.FC = () => {
  return (
    <div className="my-12 mx-auto  flex flex-col items-center max-w-7xl relative ">
      <header className="w-full">
        <Header />
      </header>

      <main>
        <Hero />
        <Features />
        <ExtendedFeatures />
        <Services />
      </main>
    </div>
  );
};

export default Page;
