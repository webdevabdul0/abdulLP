"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Vortex } from "../components/ui/vortex";
import Carousal from "../components/Carousal";

const Hero = () => {
  const buttonContainer = useRef<HTMLDivElement>(null);
  const headerText = useRef<HTMLHeadingElement>(null);
  const headerContent = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        headerContent.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 1, // Adds a stagger effect to the buttons
          duration: 2,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        buttonContainer.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5, // Adds a stagger effect to the buttons
          duration: 2,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        headerText.current?.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.5, duration: 1, ease: "power2.out" }
      );
    },
    { scope: buttonContainer }
  );
  return (
    <div className="relative w-full mt-5 md:mt-12 ">
      <Vortex
        backgroundColor="#000000"
        rangeY={800}
        particleCount={50}
        baseHue={220}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full relative"
      >
        <div ref={headerContent}>
          <div ref={headerText}>
            <h3 className="text-sm md:text-lg uppercase text-textMuted tracking-widest text-center mb-3">
              PixLab Vision platform
            </h3>

            <h1 className="text-4xl md:text-7xl font-extrabold  text-center mb-5">
              Revolutionize Document
              <br />
              Intelligence with PixLab Vision
            </h1>

            <p className="text-base md:text-xl text-center  font-light text-textMuted">
              PixLab Vision offers advanced tools for document processing and
              language model integration. It provides developers and businesses
              with APIs, a user-friendly playground, and parsing solutions to
              extract, organize, and analyze data efficiently for a seamless AI
              experience.
            </p>
          </div>

          <div
            className="flex flex-row justify-center mt-2 md:mt-6 gap-4"
            ref={buttonContainer}
          >
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-2xl text-white font-light transition duration-200 ease-linear text-sm md:text-base">
              Try Pixlab Vision
            </button>

            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
              <div className="px-8 py-3  bg-black rounded-2xl  relative group transition duration-300 text-white hover:bg-black/80">
                Explore LLM APIs
              </div>
            </button>
          </div>
        </div>

        <div className="w-full mt-5 md:mt-6">
          <Carousal />
        </div>
      </Vortex>

      <div className="w-[682px]  h-[569px] bg-[#0070F3] absolute blur-[224px] rounded-full -z-50 opacity-20 -translate-x-20 top-0 left-0"></div>
      <div className="  size-[542px] bg-[#0070F3] absolute blur-[224px] rounded-full -z-50 opacity-10 right-0 bottom-0"></div>
    </div>
  );
};

export default Hero;
