"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: <FaTwitter />,
      label: "Twitter",
    },
    {
      href: "mailto:your.email@example.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Edgar<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Full-Stack Developer with a passion for creating elegant solutions.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-xl"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Edgar. All rights reserved.</p>
          <p className="mt-2">
            Self-taught developer with {new Date().getFullYear() - 2015}+ years of experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 