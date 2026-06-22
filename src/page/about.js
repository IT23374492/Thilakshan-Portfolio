import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ProfileImg from '../img/profile.png';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function About() {
  const contactItems = [
    { icon: <FaMapMarkerAlt />, text: 'Thirunelveli North, Jaffna 40000', href: null },
    { icon: <FaPhone />,        text: '+94 77 101 3481',               href: 'tel:+94771013481' },
    { icon: <FaEnvelope />,     text: 'kanagarajahthilakshan@gmail.com',  href: 'mailto:kanagarajahthilakshan@gmail.com' },
    { icon: <FaLinkedin />,     text: 'linkedin.com/in/kanagarajah-thilakshan', href: 'https://www.linkedin.com/in/kanagarajah-thilakshan-7aa19927b/' },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/60 overflow-hidden"
      id="about"
      aria-label="About section"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">

          {/* Section heading — centred */}
          <motion.div
            className="text-center mb-14"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">Who I am</span>
            <h2 className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
              About <span className="text-red-500">Me</span>
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
          </motion.div>

          {/* Two-column layout: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Profile Image — 3D card */}
            <motion.div
              className="flex justify-center"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative group">
                {/* Decorative rotated background card */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 via-orange-300 to-yellow-200
                              rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"
                  aria-hidden="true"
                />
                {/* Inner card with shadow */}
                <div className="relative bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-2xl
                                group-hover:-translate-y-2 group-hover:shadow-red-200/50
                                transition-all duration-500">
                  <img
                    src={ProfileImg}
                    alt="Kanagarajah Thilakshan – Data Science Undergraduate at SLIIT"
                    className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl object-cover h-80 sm:h-96"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text content — left-aligned for readability */}
            <div className="space-y-6">
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-left"
                custom={2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Kanagarajah Thilakshan
                </span>
              </motion.h3>

              <motion.div
                className="space-y-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-left"
                custom={3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p>
                  A passionate{' '}
                  <span className="font-semibold text-red-500">Data Science Undergraduate(R)</span>{' '}
                  at <span className="font-semibold text-gray-800 dark:text-white">SLIIT</span>, combining
                  data science, machine learning, and modern web development to create intelligent,
                  user-centered solutions.
                </p>
                <p>
                  My approach transforms complex data into actionable insights while building AI-powered
                  applications that solve real-world problems — bridging the gap between data science
                  and exceptional user experience.
                </p>
                <p>
                  Proficient in <span className="font-semibold text-gray-800 dark:text-white">Python,
                  Machine Learning, NLP, React</span>, and full-stack development, delivering end-to-end
                  solutions with measurable impact.
                </p>
              </motion.div>

              {/* Contact details */}
              <motion.div
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 text-red-500 flex-shrink-0 text-sm">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500
                                   transition-colors break-all text-left"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400 text-left">
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* ATS-readable skills keywords */}
              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-2 mt-4 justify-start">
                  {['Python','Machine Learning','NLP','React','Data Science','SQL','Flask','MongoDB'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white dark:bg-gray-700 border border-gray-200
                                 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium
                                 shadow-sm hover:border-red-300 hover:text-red-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
