import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImg from '../img/profile.png';

function use3DTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale(1.04)`,
      transition: 'transform 0.08s ease-out',
    });
  };

  const onMouseLeave = () => {
    setStyle({ transform: 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.4s ease' });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}

export default function Hero() {
  const tilt = use3DTilt();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center"
      id="home"
      aria-label="Hero section"
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center text-center gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                       bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800
                       text-red-600 dark:text-red-400 text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Open to Opportunities
          </motion.span>

          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            className="text-red-500 font-semibold text-lg tracking-wide"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">Kanagarajah</span>{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Thilakshan
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={fadeUp}
            className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 font-medium"
          >
            Data Science Undergraduate(R)
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            I craft intelligent data solutions and build responsive web experiences.
            Specializing in <strong className="text-gray-800 dark:text-gray-200">Machine Learning</strong>,{' '}
            <strong className="text-gray-800 dark:text-gray-200">AI</strong>,{' '}
            <strong className="text-gray-800 dark:text-gray-200">NLP</strong>, and full-stack development
            to create impactful digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <a
              href="mailto:kanagarajahthilakshan@gmail.com"
              className="btn-3d inline-flex items-center justify-center gap-2
                         bg-gradient-to-r from-red-500 to-orange-500
                         hover:from-red-600 hover:to-orange-600
                         text-white font-bold rounded-xl py-3.5 px-8
                         shadow-lg shadow-red-500/30 transition-all duration-200"
              aria-label="Go to contact section"
            >
              Contact Me
              <MdOutlineRocketLaunch className="text-xl" />
            </a>
            <a
              href="#projects"
              className="btn-3d btn-3d-secondary inline-flex items-center justify-center gap-2
                         bg-white dark:bg-gray-800
                         border-2 border-gray-200 dark:border-gray-700
                         hover:border-red-400 dark:hover:border-red-500
                         text-gray-900 dark:text-white font-bold rounded-xl py-3.5 px-8
                         transition-all duration-200"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
            <a
              href="https://github.com/KanagarajahThilakshan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                         hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white
                         transition-all duration-200 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kanagarajah-thilakshan-7aa19927b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                         hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600
                         transition-all duration-200 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>

          {/* Profile Image with 3D tilt */}
          <motion.div
            variants={fadeUp}
            className="pt-6 perspective"
          >
            <div
              ref={tilt.ref}
              style={tilt.style}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="relative inline-block"
            >
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-orange-400 blur-2xl opacity-30 scale-110"
                aria-hidden="true"
              />
              {/* Ring border */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 shadow-2xl">
                <div className="p-1 rounded-full bg-white dark:bg-gray-900">
                  <img
                    src={ProfileImg}
                    alt="Kanagarajah Thilakshan – Data Science Undergraduate"
                    className="profile-float w-48 h-48 sm:w-60 sm:h-60 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeUp}
            className="pt-4 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 no-print"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              className="w-0.5 h-6 bg-gradient-to-b from-red-400 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
