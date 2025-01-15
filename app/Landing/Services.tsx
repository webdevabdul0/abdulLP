import React from "react";
import Image from "next/image";
import Image1 from "../../public/Services/1.png";
import Image2 from "../../public/Services/2.png";
import Image3 from "../../public/Services/3.png";

const Services = () => {
  return (
    <div className="mt-16 md:mt-32 flex flex-col gap-5 sm:gap-8 md:gap-10 mx-5">
      <div className="flex flex-col md:flex-row w-full ">
        <div className="basis-1/2 flex flex-col items-center md:items-start ">
          <h5 className="mb-3 sm:mb-5 text-[#6366F1] text-base sm:text-lg font-semibold">
            Vision Playground
          </h5>
          <h2 className="text-3xl  md:text-5xl font-bold text-center md:text-start mb-3 sm:mb-5">
            Your Ultimate Productivity Assistant
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start  font-light text-white/80 mb-3 sm:mb-5">
            Vision Playground is a powerful, web-based application designed to
            boost daily office productivity. From document analysis to
            AI-assisted text editing, this intuitive platform integrates
            seamlessly into your workflow to handle tedious tasks with precision
            and speed.
          </p>

          <ul className="mb-3 sm:mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Extract and summarize insights from complex files.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Digitize text from scanned documents and images effortlessly.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Automate invoice creation with customizable templates.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Rewrite, enhance, or reformat text with ease.
              </p>
            </li>
          </ul>

          <button className="border-[2px] border-white border-opacity-65 px-5 py-3 sm:py-3 rounded-2xl text-white/80 text-xs md:text-base font-semibold ">
            Streamline your daily tasks with Pixlab Vision
          </button>
        </div>

        <div className="basis-1/2">
          <Image src={Image1} alt={"hero-img"} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1/2">
          <Image src={Image2} alt={"hero-img"} />
        </div>

        <div className="basis-1/2">
          <h5 className="mb-5 text-[#6366F1] text-lg font-semibold">
            Vision Playground
          </h5>
          <h2 className="text-5xl font-bold text-start mb-5">
            Your Ultimate Productivity Assistant
          </h2>
          <p className="text-xl text-start  font-light text-white/80 mb-5">
            Vision Playground is a powerful, web-based application designed to
            boost daily office productivity. From document analysis to
            AI-assisted text editing, this intuitive platform integrates
            seamlessly into your workflow to handle tedious tasks with precision
            and speed.
          </p>

          <ul className="mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Extract and summarize insights from complex files.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Digitize text from scanned documents and images effortlessly.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Automate invoice creation with customizable templates.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Rewrite, enhance, or reformat text with ease.
              </p>
            </li>
          </ul>

          <button className="border-[2px] border-white border-opacity-65 px-5 py-3 rounded-2xl text-white/80 text-base font-semibold ">
            Streamline your daily tasks with Pixlab Vision
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1/2">
          <h5 className="mb-5 text-[#6366F1] text-lg font-semibold">
            Vision Playground
          </h5>
          <h2 className="text-5xl font-bold text-start mb-5">
            Your Ultimate Productivity Assistant
          </h2>
          <p className="text-xl text-start  font-light text-white/80 mb-5">
            Vision Playground is a powerful, web-based application designed to
            boost daily office productivity. From document analysis to
            AI-assisted text editing, this intuitive platform integrates
            seamlessly into your workflow to handle tedious tasks with precision
            and speed.
          </p>

          <ul className="mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Extract and summarize insights from complex files.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Digitize text from scanned documents and images effortlessly.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Automate invoice creation with customizable templates.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-3 bg-white rounded-full" />
              <p className="text-lg text-white/80 font-medium mb-2">
                Rewrite, enhance, or reformat text with ease.
              </p>
            </li>
          </ul>

          <button className="border-[2px] border-white border-opacity-65 px-5 py-3 rounded-2xl text-white/80 text-base font-semibold ">
            Streamline your daily tasks with Pixlab Vision
          </button>
        </div>

        <div className="basis-1/2">
          <Image src={Image3} alt={"hero-img"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
