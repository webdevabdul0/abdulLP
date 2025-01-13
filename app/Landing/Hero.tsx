import React from "react";
import Image from "next/image";
import heroImg from "../../public/hero.png";
const Hero = () => {
  return (
    <div className=" w-full mt-20  flex flex-col justify-start relative">
      <h3 className="text-lg uppercase text-textMuted tracking-widest text-center mb-5">
        PixLab Vision platform
      </h3>

      <h1 className="text-7xl font-bold  text-center">
        Revolutionize Document
        <br />
        Intelligence with PixLab Vision
      </h1>

      <p className="text-xl text-center mt-5 font-light text-textMuted">
        PixLab Vision offers advanced tools for document processing and language
        model integration. It provides developers and businesses with APIs, a
        user-friendly playground, and parsing solutions to extract, organize,
        and analyze data efficiently for a seamless AI experience.
      </p>

      <div className="flex flex-row justify-center mt-10 gap-4">
        <button className="bg-primary p-5 rounded-2xl text-white text-base font-semibold ">
          Try Pixlab Vision
        </button>

        <button className="border-[2px] border-white border-opacity-65 p-5 rounded-2xl text-textMuted text-base font-semibold ">
          Explore LLM APIs
        </button>
      </div>

      <div className="w-full mt-12">
        <Image src={heroImg} alt={"hero-img"} />
      </div>

      <div className="w-[682px]  h-[569px] bg-[#6366F1] absolute blur-[224px] rounded-full -z-50 opacity-20 -translate-x-20 "></div>
      <div className="  size-[542px] bg-[#FFFFFF] absolute blur-[200px] rounded-full -z-50 opacity-10 right-0 bottom-0"></div>
    </div>
  );
};

export default Hero;
