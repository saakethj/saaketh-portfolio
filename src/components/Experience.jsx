import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import ExperienceAnimatedBackground from './ExperienceAnimatedBackground'; // Adjust path as needed

const experiences = [
  {
    company: "BNP Paribas ISPL",
    role: "Software Engineer Intern",
    duration: "Jan 2023 – Jul 2023",
    description: [
      "Recognized for exceptional performance; promoted to full-time Associate Software Engineer.",
      "Learned banking reconciliation tools like IntelliMatch, SWIFT messages, and exception handling.",
      "Supported migration and validation of reconciliation rules and processes.",
      "Participated in root-cause analysis and logic-building for exception scenarios."
    ]
  },
  {
    company: "BNP Paribas ISPL",
    role: "Associate Software Engineer - I",
    duration: "Jul 2023 – Present",
    description: [
      "Worked on reconciliation automation using the IntelliMatch tool.",
      "Gained hands-on experience with cash reconciliation workflows, SQL queries, and batch processing.",
      "Built Python scripts for data masking and file decryption of incoming SWIFT MT messages.",
      "Participated in two major migration projects involving statement processing and reconciliation transformation.",
      "Scheduled and maintained jobs using AutoSys."
    ]
  },
  {
    company: "IBM",
    role: "Incoming Software Engineer",
    duration: "Sep 2025 – Present",
    description: [
      "Offer accepted for a full-time role at IBM (exact domain TBD).",
      "Looking forward to exploring opportunities in cloud, devops, and intelligent automation."
    ]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Create font-face CSS for local fonts
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'SF Pro Display';
        src: url('./src/assets/fonts/SF-Pro-Display-Medium.otf') format('opentype');
        font-weight: 500;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
    
  }, []);

  // Individual card scroll animation
  const CardWithScrollAnimation = ({ exp, index, isLeft }) => {
    const cardRef = useRef(null);
    const { scrollYProgress: cardProgress } = useScroll({
      target: cardRef,
      offset: ["start 0.9", "end 0.1"]
    });

    const y = useTransform(cardProgress, [0, 1], [100, 0]);
    const opacity = useTransform(cardProgress, [0, 0.3, 1], [0, 1, 1]);
    const scale = useTransform(cardProgress, [0, 0.3, 1], [0.9, 1, 1]);

    return (
      <motion.div
        ref={cardRef}
        style={{ y, opacity, scale }}
        className={`relative w-full lg:w-1/2 p-4 mb-16 z-10 ${
          isLeft 
            ? "lg:pr-12 lg:ml-auto lg:text-right" 
            : "lg:pl-12 lg:mr-auto lg:text-left"
        }`}
      >

        {/* Glass Card */}
        <motion.div
          whileHover={{ 
            y: -3
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative bg-white/8 rounded-2xl p-8 shadow-2xl border border-white/15 hover:border-orange-400/40 hover:bg-white/12 transition-all duration-300 group overflow-hidden"
        >
          {/* Fixed Glass effect - reduced backdrop blur for mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          
          {/* Backdrop blur - lighter on mobile */}
<div className="absolute inset-0 backdrop-blur-md md:backdrop-blur-lg rounded-2xl pointer-events-none"></div>
          
          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/2 to-purple-500/2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-20">
            <div className={`flex flex-col ${isLeft ? 'lg:items-end' : 'lg:items-start'} items-start`}>
              <h3 className="text-2xl font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                {exp.role}
              </h3>
              
              <p className="text-white/90 text-lg mb-2 font-medium group-hover:text-white transition-colors duration-300">
                {exp.company}
              </p>
              
              <p className="text-orange-300/80 text-sm mb-6 italic font-medium px-3 py-1 bg-orange-400/10 rounded-full border border-orange-400/20 group-hover:bg-orange-400/15 group-hover:border-orange-400/30 transition-all duration-300">
                {exp.duration}
              </p>
            </div>
            
            <ul className="text-sm text-white/80 space-y-3 group-hover:text-white/90 transition-colors duration-300 font-medium">
              {exp.description.map((point, i) => (
                <li 
                  key={i}
                  className="flex items-start gap-3 group/item hover:text-white transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 mt-2.5 group-hover/item:scale-125 transition-transform duration-200"></div>
                  <span className="leading-relaxed text-left font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="experience"
      className="relative bg-black text-white py-20 px-6 md:px-12 min-h-screen"
      style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Animated Background */}
<ExperienceAnimatedBackground className="z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="text-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Experience</span>
        </h2>
      </motion.div>

      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto pb-20"
      >
        {/* Timeline vertical line with glassmorphism */}
        <div className="absolute left-1/2 top-0 h-full w-1 transform -translate-x-1/2 z-0">
          <div className="h-full w-full bg-gradient-to-b from-orange-400 via-orange-500 to-purple-500 rounded-full opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-sm"></div>
        </div>

        {/* Experience cards with individual scroll animations */}
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <CardWithScrollAnimation
              key={index}
              exp={exp}
              index={index}
              isLeft={isLeft}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;