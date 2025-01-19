import React from "react";
import Qna from "../components/Qna";

const QuestionsAnswers = [
  {
    id: 1,
    question: "What is most beautiful city of Pakitan?",
    answer: "It's Not Lahore",
  },
  {
    id: 1,
    question: "What is most beautiful country of Earth?",
    answer: "It's Not Lahore",
  },
];

const FAQ = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl md:text-5xl font-bold text-start mb-8 sm:mb-16 text-primaryText">
          Frequently Asked Questions
        </h2>

        <Qna items={QuestionsAnswers} />
      </div>
    </div>
  );
};

export default FAQ;
