import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineEmail } from "react-icons/md";
import mail from '../mp3/mail.mp3';
import { motion } from "framer-motion";

const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play().catch(() => {});
};

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Foot() {
  return (
    <section
      className="relative bg-gray-950 text-white overflow-hidden"
      id="contact"
      aria-label="Contact section"
    >
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">

            {/* Eyebrow */}
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-red-400 uppercase tracking-widest"
            >
              Get In Touch
            </motion.span>

            {/* Heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
            >
              Let's Work{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                Together
              </span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-400 leading-relaxed"
            >
              Have a project in mind? Let's discuss how I can help bring your ideas to life
              with data-driven solutions and modern web development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <a
                href="mailto:kanagarajahthilakshan@gmail.com"
                className="btn-3d inline-flex items-center justify-center gap-2
                           bg-gradient-to-r from-red-500 to-orange-500
                           hover:from-red-600 hover:to-orange-600
                           text-white font-bold rounded-xl py-4 px-10 text-lg
                           shadow-xl shadow-red-500/30 transition-all duration-200"
                onClick={() => playSound(mail)}
                aria-label="Send email to Kanagarajah Thilakshan"
              >
                <MdOutlineEmail className="text-2xl" />
                Contact Me
              </a>

              <a
                href="https://github.com/KanagarajahThilakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-secondary inline-flex items-center justify-center gap-2
                           bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40
                           text-white font-bold rounded-xl py-4 px-10 text-lg
                           transition-all duration-200 backdrop-blur-sm"
                aria-label="View GitHub profile"
              >
                <AiFillGithub className="text-2xl" />
                View GitHub
              </a>
            </motion.div>

            {/* Social icon links */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center items-center gap-6 pt-6"
            >
              <a
                href="https://www.linkedin.com/in/kanagarajah-thilakshan-7aa19927b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 text-gray-400
                           hover:text-white hover:border-white/40 hover:bg-white/5
                           transition-all duration-200 hover:-translate-y-1 text-3xl"
                aria-label="LinkedIn profile"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://github.com/KanagarajahThilakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 text-gray-400
                           hover:text-white hover:border-white/40 hover:bg-white/5
                           transition-all duration-200 hover:-translate-y-1 text-3xl"
                aria-label="GitHub profile"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:kanagarajahthilakshan@gmail.com"
                className="p-3 rounded-full border border-white/10 text-gray-400
                           hover:text-white hover:border-white/40 hover:bg-white/5
                           transition-all duration-200 hover:-translate-y-1 text-3xl"
                aria-label="Email"
              >
                <MdOutlineEmail />
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="mt-6 text-gray-500 text-sm">
                © 2026 Kanagarajah Thilakshan. All rights reserved.
              </p>
              <p className="mt-1 text-gray-600 text-xs">
                Crafting intelligent solutions through data &amp; design.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
