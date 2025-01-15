import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-center gap-5">
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
  );
};

export default Header;
