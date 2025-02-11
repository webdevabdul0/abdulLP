import React from "react";
import Image from "next/image";
import Image1 from "../../public/Contact/1.png";
import Image2 from "../../public/Contact/2.png";
import Image3 from "../../public/Contact/3.png";

const Footer = () => {
  return (
    <div className="mt-10 bg-black flex flex-col items-center mx-5">
      <div className="max-w-7xl w-full border-t-2 border-white/20 py-8">
        {/*
This will be used if you need navigation Links 
         <div className="w-full flex flex-col md:flex-row  md:justify-between  items-center md:items-start ">
          <div className="flex flex-col mb-8 md:mb-0">
            <h2 className="text-primaryText text-2xl font-bold">Abdul Hanan</h2>
          </div>


         
         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-base font-bold text-primaryText">Heading</h3>
              <ul className="flex flex-col gap-2  font-normal text-sm sm:text-base items-center md:items-start">
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-base font-bold text-primaryText">Heading</h3>
              <ul className="flex flex-col gap-2  font-normal text-sm sm:text-base items-center md:items-start">
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="text-base font-bold text-primaryText">Heading</h3>
              <ul className="flex flex-col gap-2  font-normal text-sm sm:text-base items-center md:items-start">
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-textMuted hover:text-white/50 transition duration-300"
                  >
                    Navigation Link
                  </a>
                </li>
              </ul>
            </div>
          </div> </div>
*/}

        <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center md:items-start ">
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
                href="https://www.behance.net/abdulhanan2003"
              >
                <Image src={Image2} alt="Img" width={24} height={24} />
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
