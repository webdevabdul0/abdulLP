'use client'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={item.title + idx} className="p-4">
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden h-full flex flex-col group"
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.link && item.link !== "#" && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold border border-white rounded-full px-4 py-2"
                  >
                    View Project
                  </Link>
                )}
                {item.githubUrl && (
                  <Link
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold border border-white rounded-full px-4 py-2"
                  >
                    View Source
                  </Link>
                )}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-white text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm flex-grow">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
