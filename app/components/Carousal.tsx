import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  image: string;
  href: string;
}

interface CarousalItemProps {
  name: string;
  image: string;
  href: string;
}

const CarousalItem: React.FC<CarousalItemProps> = ({ name, image, href }) => (
  <div className="relative w-full h-full p-4 bg-white  rounded-3xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center text-center">
    <Image
      src={image}
      alt={name}
      layout="fill"
      objectFit="cover"
      className="absolute top-0 left-0 w-full h-full rounded-3xl"
    />
    <h3 className="text-lg font-semibold text-gray-800 absolute bottom-6 left-6">
      {name}
    </h3>
  </div>
);

const Carousal: React.FC = () => {
  const items: Product[] = [
    {
      id: 1,
      name: "Product 1",
      image: "/Services/hero6.jpg",
      href: "#",
    },
    {
      id: 2,
      name: "Product 2",
      image: "/Services/hero1.jpg",
      href: "#",
    },
    {
      id: 3,
      name: "Product 3",
      image: "/Services/hero2.jpg",
      href: "#",
    },
    {
      id: 4,
      name: "Product 4",
      image: "/Services/hero3.jpg",
      href: "#",
    },
    {
      id: 5,
      name: "Product 4",
      image: "/Services/hero4.jpg",
      href: "#",
    },
    {
      id: 6,
      name: "Product 4",
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
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-lg hover:bg-opacity-75"
      >
        Prev
      </button>

      {/* Carousel Items */}
      <div className="flex w-full items-center justify-center relative">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isLeft = (index + 1) % items.length === activeIndex; // Left neighbor
          const isRight =
            (index - 1 + items.length) % items.length === activeIndex; // Right neighbor
          const isExtraLeft = (index + 2) % items.length === activeIndex; // Extra left (invisible)
          const isExtraRight =
            (index - 2 + items.length) % items.length === activeIndex; // Extra right (invisible)

          return (
            <motion.div
              key={item.id}
              initial={{
                opacity: isExtraLeft || isExtraRight ? 0 : 0.5,
                scale: isExtraLeft || isExtraRight ? 0.8 : isActive ? 1 : 0.9,
                x: isExtraLeft
                  ? -400 // Position for extra left
                  : isExtraRight
                  ? 400 // Position for extra right
                  : isLeft
                  ? -400
                  : isRight
                  ? 200
                  : 0,
              }}
              animate={{
                opacity: isActive ? 1 : isExtraLeft || isExtraRight ? 0 : 0.5,
                scale: isActive ? 1 : isExtraLeft || isExtraRight ? 0.8 : 0.9,
                x: isExtraLeft
                  ? -400
                  : isExtraRight
                  ? 400
                  : isLeft
                  ? -200
                  : isRight
                  ? 200
                  : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: isExtraLeft ? -400 : isExtraRight ? 400 : -300,
              }}
              transition={
                isExtraLeft || isExtraRight
                  ? { duration: 1 } // Disable animation for invisible items
                  : { duration: 1 } // Regular animation for visible items
              }
              className={`absolute w-[500px] h-[400px] ${
                isActive ? "z-20" : isExtraLeft || isExtraRight ? "z-0" : "z-10"
              }`}
            >
              <CarousalItem
                name={item.name}
                image={item.image}
                href={item.href}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-lg hover:bg-opacity-75"
      >
        Next
      </button>
    </div>
  );
};

export default Carousal;
