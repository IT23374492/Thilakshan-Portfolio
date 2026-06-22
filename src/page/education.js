import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBook, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Education() {
  const education = [
    {
      type: 'degree',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      title: 'BSc (Hons) Information Technology – Data Science Specialization',
      period: 'Jul 2023 – Present',
      location: 'Jaffna',
      description: 'Core focus: Data Science, Database Systems, Machine Learning, Natural Language Processing, Programming, Web Technologies.',
      icon: <FaGraduationCap />,
      accent: 'from-red-500 to-orange-400',
    },
    {
      type: 'certification',
      institution: 'ICBT Campus, Jaffna',
      title: 'Diploma in IT & Languages (English & Sinhala)',
      period: 'Oct 2023',
      description: 'Comprehensive training in IT fundamentals and English / Sinhala language proficiency.',
      icon: <FaCertificate />,
      accent: 'from-purple-500 to-indigo-500',
    },
    {
      type: 'alevel',
      institution: 'Jaffna Hindu College, Jaffna',
      title: 'G.C.E Advanced Level (A/L)',
      period: 'Aug 2021',
      icon: <FaBook />,
      accent: 'from-blue-500 to-cyan-500',
    },
  ];

  const courses = [
    'Machine Learning',
    'Data Mining',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Statistics for Data Science',
    'Natural Language Processing',
  ];

  const certifications = [
    'Diploma in English and Information Technology – ICBT Campus, 2023',
    'Gateway Foundation Program – John Keels, 2018',
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/60 overflow-hidden"
      id="education"
      aria-label="Education and Certifications section"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">Academic</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            Education &amp; <span className="text-red-500">Certifications</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            Academic background and professional development in Data Science and Information Technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-12">
          {/* Vertical connector line */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 via-purple-400 to-blue-400 opacity-30" aria-hidden="true" />

            <div className="space-y-6">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex gap-4 pl-2"
                >
                  {/* Timeline dot + icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent}
                                   flex items-center justify-center text-white text-lg shadow-md z-10`}>
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md
                                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5
                                  border border-gray-100 dark:border-gray-700">
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white text-left leading-snug">
                        {item.title}
                      </h3>
                      <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1
                                       rounded-full bg-gradient-to-r ${item.accent} text-white
                                       whitespace-nowrap self-start sm:self-auto flex-shrink-0`}>
                        <FaCalendarAlt />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 text-left">
                      {item.institution}
                    </p>

                    {item.location && (
                      <p className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-2 text-left">
                        <FaMapMarkerAlt className="flex-shrink-0 text-red-400" />
                        {item.location}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-left leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Two-column: Relevant Coursework + Certifications */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Relevant Coursework */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6
                       border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">
              Relevant Coursework
            </h3>
            <ul className="space-y-2">
              {courses.map((course, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6
                       border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300 text-left">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
