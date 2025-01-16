import React, { useState, useEffect } from "react";
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
  <div className="relative w-full h-full p-4 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
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
    { id: 1, name: "Product 1", image: "/Services/hero6.jpg", href: "#" },
    { id: 2, name: "Product 2", image: "/Services/hero1.jpg", href: "#" },
    { id: 3, name: "Product 3", image: "/Services/hero2.jpg", href: "#" },
    { id: 4, name: "Product 4", image: "/Services/hero3.jpg", href: "#" },
    { id: 5, name: "Product 4", image: "/Services/hero4.jpg", href: "#" },
    { id: 6, name: "Product 4", image: "/Services/hero5.jpg", href: "#" },
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

  // Automatically move to the next item every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Change every 5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-lg hover:bg-opacity-75 z-20"
      >
        Prev
      </button>

      {/* Carousel Items */}
      <div className="flex w-full items-center justify-center relative h-full">
        {/* Carousel Item Loop */}
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
                opacity: isActive || isLeft || isRight ? 1 : 0.1, // Active, left, right have opacity 1
                scale: isActive ? 1 : 0.8, // Active item is scaled up, others slightly smaller
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
                  : 0, // Set positions for each item based on its state
              }}
              animate={{
                opacity:
                  isActive || isLeft || isRight || isExtraLeft || isExtraRight
                    ? 1
                    : 0.1, // Keep opacity 1 for active, left, right, extra left, extra right
                scale: isActive ? 1 : 0.8, // Active item stays at scale 1
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
                  : -300, // Move items out to their corresponding positions during exit
              }}
              transition={{
                duration: 1.8, // Reduced duration for smoother animation
              }}
              className={`absolute w-[550px] h-[400px] ${
                isActive ? "z-20" : isLeft || isRight ? "z-10" : "z-0"
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
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full shadow-lg hover:bg-opacity-75 z-20"
      >
        Next
      </button>
    </div>
  );
};

export default Carousal;
