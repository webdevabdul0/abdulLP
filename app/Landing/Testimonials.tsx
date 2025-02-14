"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
const Testimonials = () => {
  return (
    <div className=" max-w-7xl w-screen xl:w-full overflow-hidden flex flex-col   items-center justify-center relative my-24">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 sm:mb-16 text-primaryText">
          What My Client&apos;s Say
        </h2>
      </div>

      <InfiniteMovingCards
        items={testimonial}
        direction="left"
        speed="normal"
      />

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.fiverr.com/abdulhanan0123/design-mobile-app-and-web-app-using-figma-and-adobe-xd"
      >
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl" />
          <div className="px-8 py-3  bg-background rounded-2xl  relative group hover:bg-primary/20 transition duration-300 text-primaryText ">
            View More
          </div>
        </button>
      </a>
    </div>
  );
};

export default Testimonials;

const testimonial = [
  {
    quote:
      "Abdul Hanan did an outstanding job on our app design! The visual appeal and attention to detail were top-notch, showcasing incredible creativity. Working with him was a breeze due to his prompt delivery, fluent communication, and polite demeanor.",
    name: "awmccloud ",
    title: "Outstanding job!",
  },
  {
    quote:
      "Abdul Hanan truly exceeded my expectations with his outstanding professionalism in app design. His politeness and high level of cooperation made the process smooth and enjoyable. Delivery was swift and top-notch—HIGHLY RECOMMEND! 👍",
    name: "yousifroh",
    title: "HIGHLY RECOMMEND!",
  },
  {
    quote:
      "Very professional service and communication. The work was done perfectly, of very high quality. Definitely will work with Abdul again in the future!",
    name: "orkhen",
    title: "Very professional service",
  },
  {
    quote:
      "Abdul is an impressive professional and it was a pleasure to work with him, he's able to provide great ideas for the concept you have and understand suggestions in the best way to deliver top-quality UX/UI. Definitely will work again with him in the future, 10/10 recommended!",
    name: "adrian_castro_9",
    title: "10/10 recommended!",
  },
  {
    quote:
      "We have worked on a complicated project with Abdul and can only report the best. He works very committed and fast. He also implemented all change requests super fast and without problems. Despite this he stands his own ideas in process. That was really helpful and had a positive influence on the main idea. We definitely continue to work with him!",
    name: "escape_this",
    title: "Committed and fast!",
  },
];
