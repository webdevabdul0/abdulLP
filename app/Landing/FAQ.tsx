import React from "react";
import Qna from "../components/Qna";

const QuestionsAnswers = [
  {
    id: 1,
    question: "Who are you and what do you do?",
    answer:
      "I’m Abdul Hanan, a Full-Stack Web Developer & UX/UI Designer specializing in React, Next.js, TailwindCSS, and AI-powered applications. I build scalable web apps, intuitive UI/UX designs, and AI-driven digital products.",
  },
  {
    id: 2,
    question: "What technologies do you specialize in?",
    answer:
      "I work primarily with frontend technologies like React.js, Next.js, and TailwindCSS, backend technologies like Node.js, Express.js, and Firebase, AI tools like Mediapipe and Google Vision API, and UI/UX design tools like Figma and Adobe XD.",
  },
  {
    id: 3,
    question: "What types of projects have you worked on?",
    answer:
      "I’ve built AI-powered applications, dashboards, and SaaS products, including a Yoga Pose Detection App, Qoodo Web Apps, and a Waste Sorting AI App. My projects focus on AI integration, seamless UX, and high-performance web development.",
  },
  {
    id: 4,
    question: "Do you take on freelance or contract work?",
    answer:
      "Currently, I’m focused on building and selling AI-powered digital products, but I’m open to exciting collaboration opportunities. Feel free to reach out if you have an interesting project!",
  },

  {
    id: 5,
    question: "Do you develop both frontend and backend?",
    answer:
      "Yes! I specialize in full-stack web development, ensuring smooth integration between frontend (Next.js, React) and backend (Node.js, Express.js, Firebase). I also incorporate AI-driven features to enhance functionality.",
  },

  {
    id: 6,
    question: "How can I contact you?",
    answer:
      "You can reach me via email at Webdevabdul@gmail.com or connect with me on GitHub at github.com/webdevabdul0.",
  },
];

const FAQ = () => {
  return (
    <div className="my-24 mx-5 xl:mx-0">
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
