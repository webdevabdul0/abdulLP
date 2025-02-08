import React from "react";
import Qna from "../components/Qna";

const QuestionsAnswers = [
  {
    id: 1,
    question: "What is the difference between React and Angular?",
    answer:
      "React is a JavaScript library focused on building user interfaces, while Angular is a full-fledged framework that includes everything you need for building dynamic web applications. React is more flexible and allows you to choose your own tools, whereas Angular provides more out-of-the-box solutions.",
  },
  {
    id: 2,
    question: "How do I optimize my website for performance?",
    answer:
      "To optimize website performance, you can minimize HTTP requests, compress images, implement lazy loading for assets, use caching effectively, and minimize JavaScript and CSS files. Tools like Lighthouse can help analyze performance and suggest improvements.",
  },
  {
    id: 3,
    question: "What is RESTful API?",
    answer:
      "REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API allows communication between systems by using standard HTTP methods such as GET, POST, PUT, and DELETE. It operates in a stateless manner and transfers data in formats like JSON or XML.",
  },
  {
    id: 4,
    question: "What is version control?",
    answer:
      "Version control is a system that helps you track changes to your code over time, allowing multiple developers to work on a project simultaneously without conflicts. Git is the most popular version control system used in modern software development, and GitHub is a cloud platform for hosting Git repositories.",
  },
  {
    id: 5,
    question: "What are the key differences between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational and use structured query language for data manipulation, while NoSQL databases are non-relational and can handle a variety of data types like documents, key-value pairs, graphs, etc. SQL databases are ideal for structured data with predefined schemas, whereas NoSQL is better for handling unstructured data or large-scale applications.",
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
