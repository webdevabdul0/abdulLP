"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
const Qna = ({
  items,
}: {
  items: {
    question: string;
    answer: string;
  }[];
}) => {
  const [theAnswer, setTheAnswer] = useState(false);

  const toggleAnswer = () => {
    console.log("We toggled Answer");
    setTheAnswer(!theAnswer);
  };
  return (
    <>
      {items.map(({ question, answer }) => (
        // eslint-disable-next-line react/jsx-key
        <div className="w-full  border-b-2 border-b-white/20 flex flex-col py-5 mb-5">
          <div className="w-full flex flex-row justify-between">
            <h3 className="text-base md:text-xl font-semibold text-start mb-3 sm:mb-5 text-primaryText">
              {question}
            </h3>

            <FaPlus
              size={36}
              color="white"
              className="ml-5"
              onClick={toggleAnswer}
            />
          </div>

          {theAnswer && (
            <p className="text-base sm:text-base text-textMuted font-medium">
              {answer}
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default Qna;
