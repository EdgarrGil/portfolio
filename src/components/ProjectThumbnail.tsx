"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

interface ProjectThumbnailProps {
  title: string;
  projectUrl: string;
  height?: string;
}

const ProjectThumbnail = ({ title, projectUrl, height = "h-48" }: ProjectThumbnailProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Function to get a thumbnail screenshot from the URL using a service
  const getThumbnailUrl = (url: string) => {
    // Using a screenshot service to grab images of the websites
    // You can replace this with your own screenshots stored in /public/images/projects/{project-name}.jpg
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`w-full ${height} relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900`}>
      {!imageError ? (
        <>
          <Image
            src={getThumbnailUrl(projectUrl)}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onError={handleImageError}
            onLoad={() => setIsLoading(false)}
            priority
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}
        </>
      ) : (
        // Fallback to placeholder if image fails to load
        <div className="h-full w-full flex items-center justify-center p-4">
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
            <p className="text-xs mt-2 text-gray-500">{projectUrl.replace('https://', '')}</p>
          </motion.div>
        </div>
      )}
      
      {/* Overlay for better text visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      {/* Project title overlay */}
      <div className="absolute bottom-2 left-2 right-2 text-white">
        <p className="text-sm font-semibold truncate">{title}</p>
      </div>
    </div>
  );
};

export default ProjectThumbnail; 