"use client";
import React from "react";
import Image from "next/image";
import { GlareCard } from "../components/ui/glare-card";

const Features = () => {
  return (
    <div className=" mt-12 md:mt-24 mx-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <GlareCard className="max-w-full border border-white/10 flex flex-col justify-center items-center px-7 py-6 sm:py-12 gap-2 sm:gap-5 rounded-3xl overflow-hidden">
          <Image
            src="/Features/mingcute_laptop-line.svg"
            width={70}
            height={70}
            alt="Feature IMG"
          />
          <h2 className="text-primaryText font-semibold text-lg sm:text-2xl text-center">
            Vision Playground
          </h2>

          <p className="text-sm sm:text-lg font-medium text-textMuted text-center">
            An intuitive web app for OCR, AI text editing, invoice generation,
            and office productivity tasks{" "}
          </p>
        </GlareCard>

        <GlareCard className="max-w-full border border-white/10 flex flex-col justify-center items-center px-7 py-6 sm:py-12 gap-2 sm:gap-5 rounded-3xl overflow-hidden">
          <Image
            src="/Features/mingcute_laptop-line.svg"
            width={70}
            height={70}
            alt="Feature IMG"
          />
          <h2 className="text-primaryText font-semibold text-lg sm:text-2xl text-center">
            Vision Playground
          </h2>

          <p className="text-sm sm:text-lg font-medium text-textMuted text-center">
            An intuitive web app for OCR, AI text editing, invoice generation,
            and office productivity tasks{" "}
          </p>
        </GlareCard>

        <GlareCard className="max-w-full border border-white/10 flex flex-col justify-center items-center px-7 py-6 sm:py-12 gap-2 sm:gap-5 rounded-3xl overflow-hidden">
          <Image
            src="/Features/mingcute_laptop-line.svg"
            width={70}
            height={70}
            alt="Feature IMG"
          />
          <h2 className="text-primaryText font-semibold text-lg sm:text-2xl text-center">
            Vision Playground
          </h2>

          <p className="text-sm sm:text-lg  text-textMuted text-center">
            An intuitive web app for OCR, AI text editing, invoice generation,
            and office productivity tasks{" "}
          </p>
        </GlareCard>
      </div>
    </div>
  );
};

export default Features;
