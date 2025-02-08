import React from "react";
import Image from "next/image";
import Image1 from "../../public/Services/1.png";
import Image2 from "../../public/Services/2.png";

const Services = () => {
  return (
    <div className="mt-16 md:mt-32 flex flex-col gap-5 sm:gap-8 md:gap-10 mx-5">
      <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-8 md:gap-0">
        <div className="basis-1/2 flex flex-col items-center md:items-start ">
          <h5 className="mb-3 sm:mb-5 text-[#6366F1] text-base sm:text-lg font-semibold">
            UI/UX Design
          </h5>
          <h2 className="text-3xl  md:text-5xl font-bold text-center md:text-start mb-3 sm:mb-5">
            Designing Intuitive & Engaging User Experiences
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start  font-light text-white/80 mb-3 sm:mb-5">
            I craft visually stunning and user-centric interfaces that balance
            aesthetics with functionality. My approach focuses on clean UX,
            accessibility, and seamless interactions to enhance engagement and
            usability.
          </p>

          <ul className="mb-3 sm:mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Pixel-perfect UI design with Figma & Adobe XD.
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
                User-centered UX research & wireframing for intuitive
                navigation.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Prototyping & animations to bring interfaces to life.
              </p>
            </li>
          </ul>

          <button className="border-[2px] border-white border-opacity-65 px-5 py-3 sm:py-3 rounded-2xl text-white/80 text-xs md:text-base font-semibold ">
            Contact me
          </button>
        </div>

        <div className="basis-1/2">
          <Image src={Image1} alt={"hero-img"} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="basis-1/2">
          <Image src={Image2} alt={"hero-img"} />
        </div>

        <div className="basis-1/2 flex flex-col items-center md:items-start">
          <h5 className="mb-3 sm:mb-5 text-[#6366F1] text-base sm:text-lg font-semibold">
            Full-Stack Web Development
          </h5>
          <h2 className="text-3xl  md:text-5xl font-bold text-center md:text-start mb-3 sm:mb-5">
            Building Scalable & High-Performance Web Apps
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start  font-light text-white/80 mb-3 sm:mb-5">
            I specialize in modern web development, creating fast, scalable, and
            AI-powered applications using the latest web technologies. From
            intuitive frontends to robust backends, I build products that
            deliver seamless digital experiences.
          </p>

          <ul className="mb-3 sm:mb-5">
            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Frontend: Next.js, React, TailwindCSS for stunning, responsive
                UIs.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Backend: Node.js, Express.js, Firebase for scalable performance.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                AI & APIs: Integration of AI-powered features & API-driven
                automation.
              </p>
            </li>

            <li className="flex flex-row items-baseline gap-4">
              <div className="size-2 md:size-3 bg-white rounded-full" />
              <p className="text-base md:text-lg text-white/80 font-medium mb-2">
                Optimization: SEO, performance tuning & accessibility best
                practices.
              </p>
            </li>
          </ul>

          <button className="border-[2px] border-white border-opacity-65 px-5 py-3 sm:py-3 rounded-2xl text-white/80 text-xs md:text-base font-semibold ">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
