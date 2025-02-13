import React from "react";
import { IoSparkles } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";
import Image1 from "../../public/Contact/1.png";
import Image2 from "../../public/Contact/2.png";
import Image3 from "../../public/Contact/3.png";
import Image4 from "../../public/Contact/4.png";
import logo from "../../public/Contact/logo.png";
const Contact = () => {
  return (
    <div className=" mx-5 xl:mx-0 mt-16 md:mt-32 ">
      <div className="bg-primary rounded-3xl  flex flex-col p-5 sm:p-10 md:p-20 items-center justify-center gap-5 relative">
        {/**  <div className="w-full absolute p-5 opacity-10 hidden xl:flex   ">
          <Image
            src={logo}
            layout="responsive"
            width={100}
            height={50}
            alt="IMG"
          />
        </div> */}

        <h2 className=" text-2xl text-center  md:text-5xl font-bold   text-primaryText ">
          Ready to bring your Vision to Life?
        </h2>

        <p className="text-lg  text-center   font-light text-white/80 mb-3 sm:mb-5">
          Have a project idea or looking for a developer to bring your vision to
          life? I’m open to collaborations, freelance work, and AI-driven
          development opportunities. Let’s create something impactful together!
        </p>

        <div className="flex flex-col  sm:flex-row items-center gap-3	">
          <div className="flex flex-row items-center justify-center px-5 py-2 rounded-full border-2 border-white/20 bg-[#1E5DFF]/20 gap-2">
            <IoSparkles size={20} color="white" className="opacity-80" />
            <p>24/7 Assistance</p>
          </div>

          <div className="flex flex-row items-center justify-center px-5 py-2 rounded-full border-2 border-white/20 bg-[#1E5DFF]/20 gap-2">
            <IoSparkles size={20} color="white" className="opacity-80" />
            <p>Flexible Working Hours</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12 w-full">
          <div className="bg-white/20 rounded-2xl flex flex-row justify-between items-center w-full px-5 py-4 ">
            <div className="flex flex-col gap-2">
              <p className="text-white/80 text-sm">Email me here</p>

              <a
                href="mailto:webdevabdul@gmail.com?subject=Inquiry&body=Hello Abdul, I would like to discuss..."
                className="text-white text-base font-semibold"
              >
                webdevabdul@gmail.com
              </a>
            </div>

            <IoArrowForwardOutline size={24} color="white" />
          </div>

          <div className="bg-white/20 rounded-2xl flex flex-row justify-between items-center w-full px-5 py-4 ">
            <div className="flex flex-col gap-2">
              <p className="text-white/80 text-sm">Visit my Socials</p>

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

            <IoArrowForwardOutline size={24} color="white" />
          </div>

          <div className="bg-white/20 rounded-2xl flex flex-row justify-between items-center w-full px-5 py-4 ">
            <div className="flex flex-col gap-2">
              <p className="text-white/80 text-sm">Location</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=Lahore,Pakistan"
                className="text-white text-base font-semibold"
              >
                Lahore , Pakistan
              </a>
            </div>

            <IoArrowForwardOutline size={24} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
