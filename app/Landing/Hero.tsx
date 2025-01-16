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
    <div className=" w-full mt-10 md:mt-20 ">
      <Vortex
        backgroundColor="#000000"
        rangeY={800}
        particleCount={50}
        baseHue={220}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full relative"
      >
        <div ref={headerContent}>
          <div ref={headerText}>
            <h3 className="text-sm md:text-lg uppercase text-textMuted tracking-widest text-center mb-5">
              PixLab Vision platform
            </h3>

            <h1 className="text-4xl md:text-7xl font-extrabold  text-center">
              Revolutionize Document
              <br />
              Intelligence with PixLab Vision
            </h1>

            <p className="text-base md:text-xl text-center mt-5 font-light text-textMuted">
              PixLab Vision offers advanced tools for document processing and
              language model integration. It provides developers and businesses
              with APIs, a user-friendly playground, and parsing solutions to
              extract, organize, and analyze data efficiently for a seamless AI
              experience.
            </p>
          </div>

          <div
            className="flex flex-row justify-center mt-6 md:mt-10 gap-4"
            ref={buttonContainer}
          >
            <button className="bg-primary px-5 py-2 sm:py-3 rounded-2xl text-white text-sm md:text-base font-semibold ">
              Try Pixlab Vision
            </button>

            <button className="border-[2px] border-white border-opacity-65 px-5 py-2 sm:py-3 rounded-2xl text-textMuted text-sm md:text-base font-semibold ">
              Explore LLM APIs
            </button>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-12">
          <Carousal />
        </div>
      </Vortex>

      {/*<div className="w-[682px]  h-[569px] bg-[#6366F1] absolute blur-[224px] rounded-full -z-50 opacity-20 -translate-x-20 "></div>
      <div className="  size-[542px] bg-[#FFFFFF] absolute blur-[200px] rounded-full -z-50 opacity-10 right-0 bottom-0"></div>*/}
    </div>
  );
};

export default Hero;
