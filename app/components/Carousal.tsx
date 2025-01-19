import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  href: string;
}

interface CarousalItemProps {
  name: string;
  desc: string;
  image: string;
  href: string;
}
const CarousalItem: React.FC<CarousalItemProps & { isActive: boolean }> = ({
  name,
  image,
  href,
  desc,
  isActive,
}) => (
  <div
    className={`relative w-full h-full p-4 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden ${
      isActive ? "group" : ""
    }`}
  >
    {/* Background Image */}
    <Image
      src={image}
      alt={name}
      layout="fill"
      objectFit="cover"
      className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
        isActive ? "group-hover:scale-125" : ""
      }`}
    />

    {/* Gradient Overlay */}
    <div
      className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${
        isActive ? "group-hover:from-black/95 group-hover:h-full" : ""
      }`}
    ></div>

    {/* Content */}
    <div
      className={`absolute bottom-1 left-6 text-left transition-all duration-500 ${
        isActive ? "group-hover:bottom-8" : ""
      }`}
    >
      {/* Product Name */}
      <h3
        className={`text-xl font-semibold text-white mb-2 translate-y-12 transition-all duration-500 ${
          isActive ? "group-hover:text-2xl group-hover:translate-y-0" : ""
        }`}
      >
        {name}
      </h3>
      {/* Description */}
      <p
        className={`text-sm text-white opacity-0 translate-y-6 transition-all duration-500 ${
          isActive ? "group-hover:opacity-100 group-hover:translate-y-0" : ""
        }`}
      >
        {desc}
      </p>
      {/* Link */}
      <a
        href={href}
        className={`text-base text-primary font-bold  opacity-0 translate-y-12 transition-all duration-500 ${
          isActive ? "group-hover:opacity-100 group-hover:translate-y-0" : ""
        }`}
      >
        Learn More
      </a>
    </div>
  </div>
);

const Carousal: React.FC = () => {
  const items: Product[] = [
    {
      id: 1,
      name: "Product Number 1 Name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit lacus, sagittis in eros sed, lobortis cursus felis. In eu accumsan enim. Sed luctus, diam non dictum lobortis, augue quam tristique velit, at fermentum enim turpis in urna. ",
      image: "/Services/hero6.jpg",
      href: "#",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit lacus, sagittis in eros sed, lobortis cursus felis. In eu accumsan enim. Sed luctus, diam non dictum lobortis, augue quam tristique velit, at fermentum enim turpis in urna. ",
      image: "/Services/hero1.jpg",
      href: "#",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit lacus, sagittis in eros sed, lobortis cursus felis. In eu accumsan enim. Sed luctus, diam non dictum lobortis, augue quam tristique velit, at fermentum enim turpis in urna. ",
      image: "/Services/hero2.jpg",
      href: "#",
    },
    {
      id: 4,
      name: "Product 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit lacus, sagittis in eros sed, lobortis cursus felis. In eu accumsan enim. Sed luctus, diam non dictum lobortis, augue quam tristique velit, at fermentum enim turpis in urna. ",
      image: "/Services/hero3.jpg",
      href: "#",
    },
    {
      id: 5,
      name: "Product 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit lacus, sagittis in eros sed, lobortis cursus felis. In eu accumsan enim. Sed luctus, diam non dictum lobortis, augue quam tristique velit, at fermentum enim turpis in urna. ",
      image: "/Services/hero4.jpg",
      href: "#",
    },
    {
      id: 6,
      name: "Product 6",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit lacus, sagittis in eros sed, lobortis cursus felis. In eu accumsan enim. Sed luctus, diam non dictum lobortis, augue quam tristique velit, at fermentum enim turpis in urna. ",
      image: "/Services/hero5.jpg",
      href: "#",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full shadow-lg hover:bg-white/5 transition duration-500 z-20 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Carousel Items */}
      <div className="flex w-full items-center justify-center relative h-full">
        {/* Carousel Item Loop */}
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isLeft = (index + 1) % items.length === activeIndex; // Left neighbor
          const isRight =
            (index - 1 + items.length) % items.length === activeIndex; // Right neighbor
          const isExtraLeft = (index + 2) % items.length === activeIndex; // Extra left
          const isExtraRight =
            (index - 2 + items.length) % items.length === activeIndex; // Extra right

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: isActive
                  ? 1
                  : isLeft || isRight
                  ? 1
                  : isExtraLeft || isExtraRight
                  ? 0.2
                  : 0.1,
                scale: isActive ? 1 : 0.8,
                x: isActive
                  ? 0
                  : isLeft
                  ? 0
                  : isRight
                  ? 0
                  : isExtraLeft
                  ? 0
                  : isExtraRight
                  ? 0
                  : 0,
              }}
              animate={{
                opacity: isActive
                  ? 1
                  : isLeft || isRight
                  ? 1
                  : isExtraLeft || isExtraRight
                  ? 0.2
                  : 0.1,
                scale: isActive ? 1 : 0.8,
                x: isActive
                  ? 0
                  : isLeft
                  ? -300
                  : isRight
                  ? 300
                  : isExtraLeft
                  ? -500
                  : isExtraRight
                  ? 500
                  : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: isLeft
                  ? -400
                  : isRight
                  ? 400
                  : isExtraLeft
                  ? -600
                  : isExtraRight
                  ? 600
                  : -300,
              }}
              transition={{
                duration: 1.6,
                type: "spring",
                damping: 20,
                stiffness: 100,
              }}
              className={`absolute w-[550px] h-[400px] ${
                isActive ? "z-20" : isLeft || isRight ? "z-10" : "z-0"
              }`}
            >
              <CarousalItem
                name={item.name}
                image={item.image}
                desc={item.desc}
                href={item.href}
                isActive={isActive} // Pass the isActive flag
              />
            </motion.div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full shadow-2xl hover:bg-white/5 transition duration-500 z-20 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousal;
