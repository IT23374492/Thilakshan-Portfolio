import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaReact, FaDatabase, FaFlask, FaGitAlt,
  FaNode, FaJava, FaTable, FaBrain, FaChartBar,
  FaJs, FaCogs,
} from 'react-icons/fa';

function use3DTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setStyle({ transform: `perspective(700px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.06)`, transition: 'transform 0.08s ease-out' });
  };
  const onMouseLeave = () =>
    setStyle({ transform: 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.4s ease' });
  return { ref, style, onMouseMove, onMouseLeave };
}

function SkillCard({ skill, idx }) {
  const tilt = use3DTilt();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      viewport={{ once: true }}
    >
      <div
        ref={tilt.ref}
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className={`skill-shine bg-gradient-to-br ${skill.color} p-5 rounded-2xl shadow-lg
                    hover:shadow-2xl transition-shadow duration-300 cursor-default`}
        role="listitem"
        aria-label={`Skill: ${skill.name}`}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="text-white text-4xl drop-shadow">{skill.icon}</div>
          <p className="text-white font-bold text-sm text-center leading-tight">{skill.name}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const skillsData = [
    { name: 'Python',           icon: <FaPython />,      color: 'from-blue-500 to-cyan-500'      },
    { name: 'Machine Learning', icon: <FaBrain />,        color: 'from-purple-500 to-pink-500'    },
    { name: 'React',            icon: <FaReact />,        color: 'from-cyan-400 to-blue-500'      },
    { name: 'Data Science',     icon: <FaChartBar />,     color: 'from-emerald-500 to-teal-500'   },
    { name: 'Flask / Django',   icon: <FaFlask />,        color: 'from-gray-600 to-gray-800'      },
    { name: 'Node.js',          icon: <FaNode />,         color: 'from-green-400 to-green-600'    },
    { name: 'SQL / Database',   icon: <FaDatabase />,     color: 'from-orange-500 to-red-500'     },
    { name: 'Git & GitHub',     icon: <FaGitAlt />,       color: 'from-red-600 to-orange-600'     },
    { name: 'Java',             icon: <FaJava />,         color: 'from-red-500 to-amber-600'      },
    { name: 'Pandas / NumPy',   icon: <FaTable />,        color: 'from-violet-500 to-purple-600'  },
    { name: 'Scikit-learn',     icon: <FaCogs />,         color: 'from-yellow-400 to-orange-400'  },
    { name: 'JavaScript',       icon: <FaJs />,           color: 'from-yellow-500 to-amber-500'   },
  ];

  const competencyGroups = [
    {
      title: 'Data Science & ML',
      color: 'text-red-500 dark:text-red-400',
      items: 'EDA, Feature Engineering, Predictive Modeling, NLP, Statistical Analysis, Text Classification, Model Evaluation',
    },
    {
      title: 'Web Development',
      color: 'text-blue-500 dark:text-blue-400',
      items: 'React, Flask, Django, FastAPI, REST APIs, Full-Stack, Responsive Design, MongoDB',
    },
    {
      title: 'Tools & Platforms',
      color: 'text-purple-500 dark:text-purple-400',
      items: 'GitHub, Jupyter Notebook, PyCharm, VS Code, Firebase, MongoDB Atlas',
    },
  ];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden"
      id="skills"
      aria-label="Skills and Technologies section"
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
          <span className="text-sm font-semibold text-red-500 uppercase tracking-widest">Tech Stack</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black">
            <span className="text-red-500">Skills</span>
            <span className="text-gray-900 dark:text-white"> & Technologies</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base">
            Technologies, tools, and frameworks I work with daily.
          </p>
        </motion.div>

        {/* Skills Grid — 12 items: 4 cols on lg, 3 on sm, 2 on xs */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-14"
          role="list"
          aria-label="Technical skills"
        >
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} idx={idx} />
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-red-50/30 dark:from-gray-800 dark:to-gray-800
                     rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-left">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencyGroups.map((group, i) => (
              <div key={i} className="text-left">
                <p className={`font-bold mb-1 ${group.color}`}>{group.title}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{group.items}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
