"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaDatabase, FaServer, FaGraduationCap, FaLaptopCode, FaUserTie, FaGithub } from "react-icons/fa";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import GradientBackground from "@/components/ParticleBackground";
import ContactForm from "@/components/ContactForm";

// Hardcoded blue theme
const theme = {
  id: "blue",
  name: "Blue",
  primary: "#3B82F6", // blue-500
  secondary: "#1E40AF", // blue-800
  accent: "#60A5FA", // blue-400
  gradient: {
    from: "#0f172a", // slate-900
    via: "#1e3a8a", // blue-900
    to: "#111827", // gray-900
  },
  textGradient: {
    from: "#60A5FA", // blue-400
    to: "#4F46E5", // indigo-600
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-black dark:bg-black py-20 min-h-screen pt-28 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <GradientBackground theme={theme} />
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="block text-white text-opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(255,255,255,0.8)",
                  transition: { duration: 0.2 }
                }}
              >
                Hi, I	&apos;m Edgar
              </motion.span>
              <motion.span 
                className="block mt-2 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.textGradient.from}, ${theme.textGradient.to})`
                }}
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  repeatType: "reverse", 
                }}
                whileHover={{ 
                  textShadow: `0 0 25px ${theme.primary}80`,
                  transition: { duration: 0.2 }
                }}
              >
                Full-Stack Developer
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400 mb-8 backdrop-blur-[2px] leading-relaxed text-shadow p-4 rounded-lg bg-black/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                backgroundColor: "rgba(0,0,0,0.2)",
                transition: { duration: 0.2 }
              }}
            >
              With over 10 years of self-taught coding experience across various technologies.
              Creating elegant, responsive, and efficient applications is my passion.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#projects" 
                className="px-6 py-3 text-white rounded-md transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
                style={{ backgroundColor: theme.primary }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 20px ${theme.primary}99`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span> 
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})`
                  }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 border rounded-md transition-all duration-300 relative overflow-hidden group"
                style={{ 
                  borderColor: theme.primary,
                  color: theme.primary
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 20px ${theme.primary}60`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: theme.primary }}
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
              <div className="absolute inset-0 rounded-full overflow-hidden z-10 border-4 border-blue-500">
                <Image
                  src="/avatar.jpg"
                  alt="Edgar's Profile Avatar"
                  fill
                  sizes="(max-width: 768px) 18rem, 24rem"
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Animated border effect */}
              <motion.div 
                className="absolute -inset-1 rounded-full opacity-50 z-0"
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${theme.primary}cc, transparent)`,
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0", "0% 0", "200% 0"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-40 h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                  <div className="absolute inset-0 overflow-hidden rounded-full z-10 border-4 border-blue-500">
                    <Image
                      src="/avatar.jpg"
                      alt="Edgar's Profile Avatar"
                      fill
                      sizes="10rem"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Edgar</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    I	&apos;m a self-taught developer with over 10 years of experience exploring various technologies and programming languages. 
                    My journey began out of curiosity and has evolved into a passion for creating efficient, user-friendly applications.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Now with AI as my coding partner, I&apos;m excited to take on new challenges and push the boundaries of what I can create. 
                    I&apos;m constantly learning and adapting to new technologies to stay at the forefront of development trends.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>
            
            <div className="relative">
              {/* Timeline center line */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
                style={{ 
                  backgroundColor: `${theme.primary}30`
                }}
              ></div>
              
              {/* Timeline items */}
              {[
                {
                  year: "2013",
                  title: "Started Coding Journey",
                  description: "Began learning programming through online resources and tutorials, focusing primarily on web fundamentals.",
                  icon: <FaCode />,
                  side: "left"
                },
                {
                  year: "2015",
                  title: "First Professional Projects",
                  description: "Started taking on small client projects, building basic websites and web applications.",
                  icon: <FaLaptopCode />,
                  side: "right"
                },
                {
                  year: "2018",
                  title: "Expanded Tech Stack",
                  description: "Learned React, Node.js, and started exploring database technologies like MongoDB and MySQL.",
                  icon: <FaGraduationCap />,
                  side: "left"
                },
                {
                  year: "2021",
                  title: "Full-Stack Development",
                  description: "Became proficient in full-stack development, creating end-to-end applications with modern technologies.",
                  icon: <FaUserTie />,
                  side: "right"
                },
                {
                  year: "2025",
                  title: "AI-Enhanced Development",
                  description: "Embraced AI tools to accelerate development workflow and take on more complex projects.",
                  icon: <FaLaptopCode />,
                  side: "left"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.year}
                  className={`relative mb-12 ${
                    item.side === "left" ? "md:pr-8 md:text-right md:mr-auto md:ml-0 ml-auto mr-auto" : "md:pl-8 md:ml-auto md:mr-0 ml-auto mr-auto"
                  } md:w-[45%] w-[80%]`}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4 justify-center md:justify-start">
                      <span className={`text-lg font-bold px-4 py-1 rounded-full text-blue-800 dark:text-blue-200 ${
                        item.side === "right" ? "md:order-2" : ""
                      }`}
                      style={{ 
                        backgroundColor: item.side === "right" 
                          ? `${theme.primary}20` 
                          : `${theme.primary}20`,
                        color: theme.primary
                      }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:top-6 md:translate-x-0 
                    ${item.side === 'left' ? 'md:right-[-41px]' : 'md:left-[-41px]'}
                    w-10 h-10 rounded-full flex items-center justify-center text-white z-10`}
                    style={{ backgroundColor: theme.primary }}
                    >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 mt-16">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Approach</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I believe in creating clean, maintainable code that solves real problems. My development approach focuses on:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: "User-Centered Design",
                  description: "Placing the end-user at the center of all development decisions to create intuitive, accessible interfaces."
                },
                {
                  title: "Performance Optimization",
                  description: "Ensuring applications run smoothly and efficiently across all devices and network conditions."
                },
                {
                  title: "Iterative Development",
                  description: "Building in small, incremental steps with frequent testing and refinement to achieve the best results."
                },
                {
                  title: "Continuous Learning",
                  description: "Staying current with industry trends and best practices to deliver modern, innovative solutions."
                }
              ].map((approach, index) => (
                <motion.div 
                  key={approach.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              With a decade of self-learning, I&apos;ve developed skills across the entire development stack.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="text-4xl text-blue-500 mb-4" />,
                title: "Frontend Development",
                skills: [
                  { name: "React", level: 90 },
                  { name: "Next.js", level: 85 },
                  { name: "JavaScript", level: 95 },
                  { name: "TypeScript", level: 80 },
                  { name: "Svelte", level: 75 },
                  { name: "CSS/SASS", level: 90 },
                ],
                description: "Creating beautiful, responsive user interfaces with modern frameworks and best practices."
              },
              {
                icon: <FaServer className="text-4xl text-green-500 mb-4" />,
                title: "Backend Development",
                skills: [
                  { name: "Node.js", level: 85 },
                  { name: "Express", level: 80 },
                  { name: "Python", level: 70 },
                  { name: "PHP", level: 75 },
                  { name: "REST APIs", level: 90 },
                  { name: "Authentication", level: 85 },
                ],
                description: "Building robust server-side applications with efficient and secure architectures."
              },
              {
                icon: <FaDatabase className="text-4xl text-purple-500 mb-4" />,
                title: "Database & DevOps",
                skills: [
                  { name: "MySQL", level: 80 },
                  { name: "PostgreSQL", level: 75 },
                  { name: "MongoDB", level: 85 },
                  { name: "Firebase", level: 90 },
                  { name: "Git", level: 95 },
                  { name: "CI/CD", level: 70 },
                ],
                description: "Managing and optimizing databases, with experience in both SQL and NoSQL solutions."
              }
            ].map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                    {skill.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {skill.skills.map((item, i) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className={`h-2.5 rounded-full ${
                            index === 0 ? "bg-blue-500" : 
                            index === 1 ? "bg-green-500" : "bg-purple-500"
                          }`}
                          style={{ 
                            width: `${item.level}%`,
                            backgroundColor: index === 0 
                              ? theme.primary 
                              : index === 1 
                                ? theme.secondary 
                                : theme.accent
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paesobebe Platform",
                description: "A content sharing platform where raw, unfiltered content thrives without restrictions or algorithms, focusing on pure creative expression.",
                image: "/placeholder.jpg",
                tags: ["Next.js", "React", "Tailwind CSS", "Video Streaming"],
                demoUrl: "https://paesobebe.vercel.app/"
              },
              {
                title: "PEB Music Platform",
                description: "A music-focused platform featuring the latest music videos, live performances, and artist content with interactive charts and trending sections.",
                image: "/placeholder.jpg",
                tags: ["React", "Media Streaming", "Music API", "Next.js"],
                demoUrl: "https://peb-fta1.vercel.app/"
              },
              {
                title: "PEB-Paesobebe Integration",
                description: "An integrated version of the PEB music platform and Paesobebe content sharing service, combining media consumption with content creation.",
                tags: ["JavaScript", "Next.js", "API Integration", "Full Stack"],
                demoUrl: "https://peb-paesobebe.vercel.app/"
              },
              {
                title: "Gather-Fam Community Platform",
                description: "A platform designed to bring communities together through shared interests, events, and communication tools.",
                tags: ["React", "Node.js", "Community Features", "Real-time Updates"],
                demoUrl: "https://gather-fam.vercel.app/"
              },
              {
                title: "Capper-Score Sports App",
                description: "A sports tracking and scoring application with real-time updates, statistics, and prediction features for sports enthusiasts.",
                tags: ["Next.js", "Sports API", "Real-time Updates", "Data Visualization"],
                demoUrl: "https://capper-score.vercel.app/"
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website showcasing my skills, projects, and professional experience as a self-taught developer.",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
                demoUrl: "#home"
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 relative flex items-center justify-center">
                  <ProjectThumbnail title={project.title} projectUrl={project.demoUrl} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-blue-500 hover:text-blue-700 flex items-center gap-2"
                    style={{ color: theme.primary }}
                  >
                    View Project <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I&apos;m currently available for freelance work and full-time positions.
              If you have a project that needs my expertise, let&apos;s talk about it!
            </p>
            
            <div className="flex justify-center mt-12">
              <ContactForm theme={theme} />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
