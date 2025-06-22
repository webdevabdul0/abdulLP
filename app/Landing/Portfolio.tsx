"use client";
import React, { useState } from "react";
import { items } from "../constants";
import { HoverEffect } from "../components/ui/card-hover-effect";

type FilterType = "all" | "development" | "design";

const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  const projects = filteredItems.map((item) => ({
    title: item.name,
    description: item.desc,
    link: item.href,
    image: item.image,
    technologies: item.technologies || [],
    githubUrl: item.githubUrl,
  }));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primaryText mb-8">
        My Portfolio
      </h2>
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-white/10 text-textMuted hover:bg-white/20"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("development")}
          className={`px-4 py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${
            filter === "development"
              ? "bg-blue-600 text-white"
              : "bg-white/10 text-textMuted hover:bg-white/20"
          }`}
        >
          Development
        </button>
        <button
          onClick={() => setFilter("design")}
          className={`px-4 py-2 text-sm sm:text-base rounded-lg transition-colors duration-300 ${
            filter === "design"
              ? "bg-blue-600 text-white"
              : "bg-white/10 text-textMuted hover:bg-white/20"
          }`}
        >
          Design
        </button>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Portfolio; 