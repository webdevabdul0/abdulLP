"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks, socialLinks } from "../../app/constants";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-between lg:hidden mx-4 sm:mx-8 ">
        <h3 className="text-xl text-primaryText tracking-wide uppercase font-bold">
          Abdul Hanan
        </h3>
        <FaBars size={24} color="white" onClick={toggleMenu} className="z-20" />
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
              onClick={toggleMenu}
            >
              <FaTimes
                size={24}
                color="white"
                onClick={toggleMenu}
                className="absolute top-10 right-4"
              />

              <div
                className=" flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {" "}
                <nav>
                  <ul className="flex flex-col  items-center gap-8 ">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={toggleMenu}
                          className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-textMuted hover:text-white/50 transition duration-300 font-normal"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 text-sm xl:text-base">
         

          <ul className="flex flex-row gap-4">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
