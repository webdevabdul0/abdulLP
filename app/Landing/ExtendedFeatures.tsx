import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

const ExtendedFeatures = () => {
  return (
    <div className="relative mt-12 md:mt-24  mx-5">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-2 sm:mb-5 text-primaryText">
          Elevate Your Web Experience
          <br />
          with Cutting-Edge Development
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center  font-light text-textMuted">
          Explore my expertise in AI-powered applications, UI/UX design, and
          high-performance web solutions. From seamless front-end interfaces to
          AI-driven automation, I build products that enhance productivity, user
          experience, and scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 gap-5 md:gap-8">
        <div className="flex flex-col items-start gap-2 px-5 py-3 sm:py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">01</h3>
          <h4 className="text-lg sm:text-xl font-bold text-primaryText ">
            AI-Powered UI Components
          </h4>
          <p className="text-base sm:text-lg text-textMuted font-medium">
            Enhance your web applications with AI-driven UI elements, making
            interfaces smarter and more interactive.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-3 sm:py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">02</h3>
          <h4 className="text-lg sm:text-xl font-bold text-primaryText ">
            Scalable Web Applications
          </h4>
          <p className="text-base sm:text-lg text-textMuted font-medium">
            Crafting high-performance, scalable Next.js and React applications
            for seamless user experiences.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-3 sm:py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">03</h3>
          <h4 className="text-lg sm:text-xl font-bold text-primaryText ">
            Smart Content Processing
          </h4>
          <p className="text-base sm:text-lg text-textMuted font-medium">
            Building intelligent AI tools for content parsing, data extraction,
            and automation to boost productivity.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-3 sm:py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">04</h3>
          <h4 className="text-lg sm:text-xl font-bold text-primaryText ">
            Lightning-Fast Performance
          </h4>
          <p className="text-base sm:text-lg text-textMuted font-medium">
            Optimized React & Next.js development ensuring fast-loading, smooth,
            and responsive applications.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-3 sm:py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">05</h3>
          <h4 className="text-lg sm:text-xl font-bold text-primaryText ">
            Dynamic UI/UX Prototyping
          </h4>
          <p className="text-base sm:text-lg text-textMuted font-medium">
            Creating intuitive, visually stunning UI/UX designs that blend
            aesthetics with usability.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-3 sm:py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">06</h3>
          <h4 className="text-lg sm:text-xl font-bold text-primaryText ">
            Interactive Dashboards & SaaS Solutions
          </h4>
          <p className="text-base sm:text-lg text-textMuted font-medium">
            Developing feature-rich, data-driven dashboards tailored for SaaS
            businesses and product analytics.
          </p>
        </div>
      </div>
      <div className="w-[682px]  h-[569px] bg-[#0070F3] absolute blur-[224px] rounded-full -z-50 opacity-20  top-0 transform translate-x-1/2"></div>
    </div>
  );
};

export default ExtendedFeatures;
