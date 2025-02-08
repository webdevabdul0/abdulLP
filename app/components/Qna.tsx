"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Qna = ({
  items,
}: {
  items: {
    id: number;
    question: string;
    answer: string;
  }[];
}) => {
  const [openAnswers, setOpenAnswers] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleAnswer = (id: number) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific question
    }));
  };

  return (
    <>
      {items.map(({ id, question, answer }) => (
        <div
          key={id}
          className="w-full border-b-2 border-b-white/20 flex flex-col py-5 mb-5"
        >
          <div
            className="w-full flex flex-row justify-between cursor-pointer"
            onClick={() => toggleAnswer(id)}
          >
            <h3 className="text-base md:text-xl font-semibold text-start mb-3 sm:mb-5 text-primaryText select-none">
              {question}
            </h3>
            {openAnswers[id] ? (
              <FaMinus color="white" className="ml-5   size-5 md:size-6 " />
            ) : (
              <FaPlus color="white" className="ml-5   size-5 md:size-6" />
            )}
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openAnswers[id] ? "auto" : 0,
              opacity: openAnswers[id] ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base sm:text-base text-textMuted font-medium select-none">
              {answer}
            </p>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Qna;
