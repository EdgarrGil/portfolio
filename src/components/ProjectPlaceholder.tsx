"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

interface ProjectPlaceholderProps {
  title?: string;
}

const ProjectPlaceholder = ({ title = "Project Screenshot" }: ProjectPlaceholderProps) => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2
        }}
        className="text-center"
      >
        <FaCode className="text-4xl text-blue-500 dark:text-blue-400 mx-auto mb-4" />
        <p className="text-sm font-mono text-gray-700 dark:text-gray-300">{title}</p>
      </motion.div>
    </div>
  );
};

export default ProjectPlaceholder; 