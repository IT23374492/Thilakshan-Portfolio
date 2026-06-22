import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import Project1 from "../img/hall-booking-2.png";
import Project2 from "../img/proj2.png";
import Project3 from "../img/proj3.png";
import Project4 from "../img/proj4.png";
import Project7 from "../img/proj7.png";

function use3DTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`, transition: 'transform 0.08s ease-out' });
  };
  const onMouseLeave = () =>
    setStyle({ transform: 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.45s ease' });
  return { ref, style, onMouseMove, onMouseLeave };
}

function ProjectCard({ project, idx }) {
  const tilt = use3DTilt();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        aria-label={`View project: ${project.title}`}
      >
        <div
          ref={tilt.ref}
          style={tilt.style}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg
                     overflow-hidden card-glow transition-all duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700 flex-shrink-0">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category badge */}
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold
                             bg-white/90 dark:bg-gray-900/90 text-red-600 dark:text-red-400 shadow">
              {project.category}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            <h3 className="text-base font-bold text-gray-900 dark:text-white text-left
                           group-hover:text-red-500 transition-colors duration-200 mb-1">
              {project.title}
            </h3>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 text-left">
              {project.tech}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-left flex-1 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-500
                               group-hover:gap-2.5 transition-all duration-200">
                View on GitHub <FaExternalLinkAlt size={11} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Pro() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Hall Booking Mobile Application',
      category: 'Mobile',
      image: Project1,
      tech: 'React Native | Expo | Node.js | MongoDB | Stripe',
      description: 'Cross-platform hall booking and event management with RBAC, secure payments via Stripe, JWT auth, and real-time booking management.',
      link: 'https://github.com/IT23374492/Hall-Booking-Frontend',
    },
    {
      id: 2,
      title: 'Smart Timetable Management System',
      category: 'Machine Learning',
      image: Project7,
      tech: 'Python | Flask | Pandas | Machine Learning',
      description: 'Intelligent timetable generation using ML and EDA, with a web interface for timetable viewing and schedule optimization.',
      link: 'https://github.com/IT24101940/University_Timetable_System',
    },
    {
      id: 3,
      title: 'Fake Review Detection System',
      category: 'Machine Learning',
      image: Project3,
      tech: 'Python | Flask | NLP | Scikit-learn',
      description: 'ML system detecting deceptive product reviews using NLP text classification, supervised learning, and model evaluation metrics.',
      link: 'https://github.com/KanagarajahThilakshan',
    },
    {
      id: 4,
      title: 'Tourism Itinerary Management',
      category: 'Web',
      image: Project2,
      tech: 'Web Development | HTML | CSS | JavaScript',
      description: 'Travel planning platform helping users select destinations and create structured itineraries with daily schedules.',
      link: 'https://github.com/KanagarajahThilakshan',
    },
    {
      id: 5,
      title: 'Book Store Management System',
      category: 'Web',
      image: Project4,
      tech: 'Java | MySQL | CSS | HTML',
      description: 'Inventory management system for handling book inventory, customer details, and sales records with MySQL database integration.',
      link: 'https://github.com/KanagarajahThilakshan',
    },
    {
      id: 6,
      title: 'Smart Greenhouse Monitoring',
      category: 'IoT',
      image: Project7,
      tech: 'Arduino | C/C++ | Sensors | IoT',
      description: 'Arduino-based greenhouse monitoring for temperature, humidity, and soil moisture with automated watering and ventilation controls.',
      link: 'https://github.com/KanagarajahThilakshan',
    },
  ];

  const categories = ['All', 'Mobile', 'Machine Learning', 'Web', 'IoT'];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/60 overflow-hidden"
      id="projects"
      aria-label="Projects section"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">Portfolio</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="text-red-500">Projects</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Featured work showcasing expertise in Data Science, Machine Learning, and Web Development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeFilter === category
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30 scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-red-400 hover:text-red-500'
                }`}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
