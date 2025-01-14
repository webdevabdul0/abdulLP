import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full mt-24">
      <div className="grid grid-cols-3 gap-5 ">
        <div className="border border-lightBorder flex flex-col justify-center items-center px-7 py-12 gap-5 rounded-2xl">
          <Image
            src="/Features/mingcute_laptop-line.svg"
            width={70}
            height={70}
            alt="Feature IMG"
          />
          <h2 className="text-primaryText font-semibold text-2xl text-center">
            Vision Playground
          </h2>

          <p className="text-lg font-medium text-textMuted text-center">
            An intuitive web app for OCR, AI text editing, invoice generation,
            and office productivity tasks{" "}
          </p>
        </div>

        <div className="border border-lightBorder flex flex-col justify-center items-center px-7 py-12 gap-5 rounded-2xl">
          <Image
            src="/Features/mingcute_laptop-line.svg"
            width={70}
            height={70}
            alt="Feature IMG"
          />
          <h2 className="text-primaryText font-semibold text-2xl text-center">
            Vision Playground
          </h2>

          <p className="text-lg font-medium text-textMuted text-center">
            An intuitive web app for OCR, AI text editing, invoice generation,
            and office productivity tasks{" "}
          </p>
        </div>
        <div className="border border-lightBorder flex flex-col justify-center items-center px-7 py-12 gap-5 rounded-2xl">
          <Image
            src="/Features/mingcute_laptop-line.svg"
            width={70}
            height={70}
            alt="Feature IMG"
          />
          <h2 className="text-primaryText font-semibold text-2xl text-center">
            Vision Playground
          </h2>

          <p className="text-lg font-medium text-textMuted text-center">
            An intuitive web app for OCR, AI text editing, invoice generation,
            and office productivity tasks{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
