import React from "react";

const Contact = () => {
  return (
    <div className="mt-16 md:mt-32 bg-white/5 rounded-3xl w-full  flex flex-col p-20 items-center justify-center gap-5">
      <h2 className="text-2xl md:text-5xl font-bold text-start  text-primaryText">
        Contact me at
      </h2>

      <p className="text-lg md:text-xl text-center   font-light text-white/80 mb-3 sm:mb-5">
        Vision Playground is a powerful, web-based application designed to boost
        daily office productivity. From document analysis to AI-assisted text
        editing, this intuitive platform integrates seamlessly into your
        workflow to handle tedious tasks with precision and speed.
      </p>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
        <div className="px-8 py-3  bg-black rounded-2xl  relative group transition duration-300 text-white hover:bg-black/80">
          Contact Me
        </div>
      </button>
    </div>
  );
};

export default Contact;
