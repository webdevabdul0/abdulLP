"use client";
import React from "react";
import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/logo.png";
import Image1 from "../../public/Contact/1.png";
import Image2 from "../../public/Contact/2.png";
import Image3 from "../../public/Contact/3.png";
import Image4 from "../../public/Contact/4.png";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-between lg:hidden mx-4 sm:mx-8 ">
        <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
          Abdul Hanan
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
                  <ul className="flex flex-col  items-center gap-8 ">
                    <li>
                      <a
                        href="#Testimonials"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        Testimonials
                      </a>
                    </li>

                    <li>
                      <a
                        href="#Services"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        Services
                      </a>
                    </li>

                    <li>
                      <a
                        href="#Faq"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        FAQ
                      </a>
                    </li>

                    <li>
                      <a
                        href="#Contact"
                        className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className=" flex-row justify-center gap-5 hidden lg:flex mx-4 xl:mx-0 ">
        <div className="flex flex-row justify-center items-center rounded-tl-3xl rounded-lg bg-white/5 px-5 py-3">
          <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
            Abdul Hanan
          </h3>
        </div>

        <div className="flex-1 flex flex-row justify-start items-center rounded-br-3xl rounded-lg bg-white/5 px-5 py-3">
          <nav>
            <ul className="flex flex-row text-sm  xl:text-base items-center gap-8">
              <li>
                <a
                  href="#Testimonials"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#Services"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#Faq"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#Contact"
                  className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 text-sm xl:text-base">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-tl-3xl rounded-lg text-white font-light transition duration-200 ease-linear text-sm md:text-base"
          >
            Download Resume
          </a>

          <ul className="flex flex-row gap-4">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/webdevabdul0/"
              >
                <Image src={Image1} alt="Img" width={24} height={24} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abdul-hanan-6b5b73248"
              >
                <Image src={Image3} alt="Img" width={24} height={24} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fiverr.com/abdulhanan0123"
              >
                <Image src={Image4} alt="Img" width={24} height={24} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/abdulhanan2003"
              >
                <Image src={Image2} alt="Img" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
