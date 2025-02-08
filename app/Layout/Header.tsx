"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-between md:hidden mx-4 sm:mx-8">
        <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
          LOGO
        </h3>
        <FaBars size={24} color="white" onClick={toogleMenu} />
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }} // Start completely off-screen
              animate={{
                opacity: 1,
                x: 0,
              }} // Slide into view
              exit={{ opacity: 0, x: "100%" }} // Slide out when hidden
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-50 w-full h-screen bg-black/90 flex items-center justify-center"
              onClick={toogleMenu}
            >
              <FaTimes
                size={24}
                color="white"
                onClick={toogleMenu}
                className="absolute top-10 right-4"
              />
              <div
                className=" flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {" "}
                <nav>
                  <ul className="flex flex-col items-center gap-8">
                    <li>
                      <a
                        href="#"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        Getting Started
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        API Portal
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        Products & SDKs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        Vision Playground
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full  flex-row justify-center gap-5 hidden md:flex">
        <div className="flex flex-row justify-center items-center rounded-tl-3xl rounded-lg bg-white/5 px-5 py-3">
          <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
            LOGO
          </h3>
        </div>

        <div className="flex-grow flex flex-row justify-start items-center rounded-br-3xl rounded-lg bg-white/5 px-5 py-3">
          <nav>
            <ul className="flex flex-row items-center gap-8">
              <li>
                <a
                  href="#"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  Getting Started
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  API Portal
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  Products & SDKs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  Vision Playground
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-row justify-center items-center gap-5">
          <button className="bg-primary hover:bg-[#6366F1]/80 transition duration-300 ease-in-out px-5 py-3 rounded-tl-3xl rounded-lg text-white text-base font-semibold ">
            Try Pixlab Vision
          </button>

          <button className="border-[2px] border-white border-opacity-65 px-5 py-3 rounded-br-3xl rounded-lg text-textMuted text-base font-semibold ">
            Explore LLM APIs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
