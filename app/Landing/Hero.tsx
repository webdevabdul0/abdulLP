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
        className="flex items-center flex-col justify-center px-2 md:px-5 xl:px-10  py-4 w-full relative"
      >
        <div ref={headerContent}>
          <div ref={headerText}>
            <h3 className="text-sm md:text-lg  uppercase text-textMuted tracking-widest text-center mb-3">
              UX/UI Designer & Frontend Developer
            </h3>

            <h1 className="text-4xl text-primaryText sm:text-5xl xl:text-7xl font-extrabold  text-center mb-5">
              Bringing Ideas to Life
              <br />
              Crafting Seamless Experiences
            </h1>

            <p className="text-base sm:text-lg xl:text-xl text-center  font-light text-textMuted">
              Hi, I&apos;m Abdul Hanan, a JavaScript Developer & UX/UI Designer
              passionate about building AI-powered apps, SaaS products, and
              modern web interfaces.
            </p>
          </div>

          <div
            className="flex flex-row justify-center mt-2 md:mt-6 gap-4"
            ref={buttonContainer}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-2xl  text-white font-light transition duration-200 ease-linear text-sm md:text-base flex justify-center items-center"
            >
              Download Resume
            </a>
            <a href="#Contact">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
                <div className="px-8 py-3  bg-background rounded-2xl  relative group hover:bg-primary/20 transition duration-300 text-primaryText ">
                  Get in Touch
                </div>
              </button>
            </a>
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
