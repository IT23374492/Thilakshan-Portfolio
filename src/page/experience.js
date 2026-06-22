import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function use3DTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setStyle({ transform: `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`, transition: 'transform 0.08s ease-out' });
  };
  const onMouseLeave = () =>
    setStyle({ transform: 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.4s ease' });
  return { ref, style, onMouseMove, onMouseLeave };
}

function ExperienceCard({ exp, idx }) {
  const tilt = use3DTilt();
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        ref={tilt.ref}
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl
                   border-l-4 border-red-500 p-6 card-glow transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-400
                          flex items-center justify-center text-white text-xl shadow-md">
            {exp.icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-left">
                  {exp.position}
                </h3>
                <p className="text-red-500 dark:text-red-400 font-semibold text-left">
                  {exp.company}
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500
                               dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1.5
                               rounded-full whitespace-nowrap self-start sm:self-auto">
                <FaCalendarAlt className="flex-shrink-0" />
                {exp.period}
              </span>
            </div>

            {/* Location */}
            <p className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-3 text-left">
              <FaMapMarkerAlt className="flex-shrink-0 text-red-400" />
              {exp.location}
            </p>

            {/* Bullet points */}
            <ul className="space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="text-left">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      position: 'Assistant Pharmacist – Staff',
      company: 'Kurinchy',
      period: 'Nov 2021 – Present',
      location: 'Jaffna',
      description: [
        'Maintained accurate medication records and supported compliance with pharmacy regulations, quality standards, and safe prescription handling practices.',
        'Assisted junior pharmacy assistants with pharmacy software usage, prescription processing workflows, and daily operational procedures.',
        'Provided training support to team members on data-related software tools and analysis techniques used for operational tracking and decision support.',
      ],
      icon: <FaBriefcase />,
    },
    {
      position: 'UI/UX Developer (Part-Time)',
      company: 'Remote Project',
      period: 'Nov 2024 – Jun 2025',
      location: 'Remote',
      description: [
        'Tested user interfaces across desktops, tablets, and mobile devices, identifying layout issues and improving responsive user experience.',
        'Resolved technical design challenges by applying modern UI/UX principles and collaborating with team members to improve interface usability.',
        'Applied user-focused design principles and iterative testing to deliver polished, accessible, and performant interfaces.',
      ],
      icon: <FaCode />,
    },
  ];

  const competencies = [
    'Analytical Thinking', 'Problem-Solving', 'User-Focused Design',
    'Collaborative Teamwork', 'Data Management', 'Technical Documentation', 'Team Training & Support',
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden"
      id="experience"
      aria-label="Professional Experience section"
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
          <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">Career</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            Professional <span className="text-red-500">Experience</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
            Combining analytical expertise with hands-on professional experience in pharmacy operations and UI/UX development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>

        {/* Key Competencies */}
        <motion.div
          className="max-w-3xl mx-auto mt-10 bg-gradient-to-br from-red-50 to-orange-50
                     dark:from-gray-800 dark:to-gray-750 rounded-2xl p-6 border border-red-100 dark:border-red-900/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left">
            Key Competencies
          </h3>
          <div className="flex flex-wrap gap-2 justify-start">
            {competencies.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full bg-white dark:bg-gray-700 border border-red-200
                           dark:border-red-900/40 text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
