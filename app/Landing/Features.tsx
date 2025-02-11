"use client";
import React from "react";
import { GlareCard } from "../components/ui/glare-card";

import { PiBrainDuotone } from "react-icons/pi";
import { PiPaintBrushBold } from "react-icons/pi";
import { PiLightningBold } from "react-icons/pi";
const Features = () => {
  return (
    <div className=" mt-12 md:mt-24 mx-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
        <GlareCard className="max-w-full border border-white/20  flex flex-col justify-center items-center px-7 py-6 sm:py-12 gap-2 sm:gap-5 rounded-3xl overflow-hidden">
          <PiPaintBrushBold size={60} className="text-primaryText" />
          <h2 className="text-primaryText font-semibold text-lg sm:text-xl   xl:text-2xl text-center">
            Modern UI/UX
          </h2>

          <p className="text-sm sm:text-lg font-medium text-textMuted text-center">
            Beautiful, user-centric designs that blend aesthetics with
            functionality, ensuring an intuitive and engaging experience.
          </p>
        </GlareCard>

        <GlareCard className="max-w-full border border-white/10 flex flex-col justify-center items-center px-7 py-6 sm:py-12 gap-2 sm:gap-5 rounded-3xl overflow-hidden">
          <PiBrainDuotone size={60} color="white" />
          <h2 className="text-primaryText font-semibold text-lg sm:text-xl   xl:text-2xl text-center">
            AI-Powered Apps
          </h2>

          <p className="text-sm sm:text-lg font-medium text-textMuted text-center">
            Leverage cutting-edge AI to enhance user experience, automate tasks,
            and create smarter, more efficient applications.
          </p>
        </GlareCard>

        <GlareCard className="max-w-full border border-white/10 flex flex-col justify-center items-center px-7 py-6 sm:py-12 gap-2 sm:gap-5 rounded-3xl overflow-hidden">
          <PiLightningBold size={60} color="white" />
          <h2 className="text-primaryText font-semibold text-lg sm:text-xl   xl:text-2xl text-center">
            Fast & Scalable
          </h2>

          <p className="text-sm sm:text-lg  text-textMuted text-center">
            Optimized for speed and scalability, ensuring smooth performance and
            responsiveness across all devices.
          </p>
        </GlareCard>
      </div>
    </div>
  );
};

export default Features;
