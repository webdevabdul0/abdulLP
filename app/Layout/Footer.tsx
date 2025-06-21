import React from "react";
import Image from "next/image";
import { socialLinks } from "../../app/constants";

const Footer = () => {
  return (
    <div className="mt-10 bg-black flex flex-col items-center mx-5">
      <div className="max-w-7xl w-full border-t-2 border-white/20 py-8">
        <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center md:items-start ">
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
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <p className="text-center md:text-right text-white/30 text-xs sm:text-base font-normal">
              Made by 💗 in NextJS
              <br />
              All trademarks and copyrights belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
