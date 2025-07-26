// FIXED Experience.jsx
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ExperienceAnimatedBackground from './ExperienceAnimatedBackground';
import { TextGenerateEffect } from './TextGenerateEffect';

const experiences = [
  {
    id: 1,
    company: "BNP Paribas ISPL",
    role: "Software Engineer Intern",
    duration: "Jan 2023 – Jul 2023",
    period: "2023",
    description: [
      "Joined as a software intern in the Reconciliation team.",
      "Learned banking reconciliation tools like IntelliMatch, Admin,Recollector.",
      "Worked as junior developer in migration and validation of reconciliation rules and processes.",
      "Exposed to pythin scripting to handle automation tasks",
      "Gained hands-on experience with cash reconciliation workflows, SQL queries, and batch processing."
    ]
  },
  {
    id: 2,
    company: "BNP Paribas ISPL",
    role: "Associate Software Engineer",
    duration: "Jul 2023 – Mar 2025",
    period: "2023-25",
    description: [
      "Worked on reconciliation automation using the IntelliMatch tool.",
      "Handled file flow migrations, scripts automation",
      "Developed python scripts for data validation and reconciliation.",
      "Creatied new reconciliation rules and optimized existing ones.",
    ]
  },
  {
    id: 3,
    company: "BNP Paribas ISPL",
    role: "Software Engineer",
    duration: "Jan 2025 – Aug 2025",
    period: "2025",
    description: [
      "Promoted to Software Engineer role with increased responsibilities.",
      "Leading reconciliation automation projects and mentoring junior developers.",
      "Implementing advanced Python automation solutions for financial data processing.",
      "Optimizing existing workflows and developing new reconciliation strategies.",
      "Scheduled and maintained jobs using AutoSys."

    ]
  },
  {
    id: 4,
    company: "IBM",
    role: "Incoming Software Engineer",
    duration: "Sep 2025 – Present",
    period: "2025 - Present",
    description: [
      "Offer accepted for a full-time role at IBM (exact domain TBD).",
      "Looking forward to exploring opportunities in cloud, devops, and intelligent automation.",
      "Preparing to transition into enterprise-scale software development."
    ]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInExperience, setIsInExperience] = useState(false);
  const [canExitSection, setCanExitSection] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isMobile, setIsMobile] = useState(false);
  const isScrollingRef = useRef(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'SF Pro Display';
        src: url('${import.meta.env.BASE_URL}fonts/SF-Pro-Display-Medium.otf') format('opentype');
        font-weight: 500;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = (e) => {
      if (!isInExperience || isScrollingRef.current) return;
      e.preventDefault();

      isScrollingRef.current = true;
      const delta = e.deltaY || e.touches?.[0]?.clientY || 0;

      const scrollDown = delta > 0;
      setScrollDirection(scrollDown ? 'down' : 'up');

      if (scrollDown) {
        if (currentIndex < experiences.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else if (!canExitSection) {
          setCanExitSection(true);
          setTimeout(() => {
            setIsInExperience(false);
            setCanExitSection(false);
            document.body.style.overflow = 'auto';
          }, 500);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        } else if (!canExitSection) {
          setCanExitSection(true);
          setTimeout(() => {
            setIsInExperience(false);
            setCanExitSection(false);
            document.body.style.overflow = 'auto';
          }, 500);
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700); // Adjust for scroll pacing
    };

    if (isInExperience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleScroll, { passive: false });
      window.addEventListener('touchmove', handleScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isInExperience, currentIndex, canExitSection]);

  // Entry detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            if (!isInExperience) {
              setIsInExperience(true);
              const scrollY = window.scrollY;
              const entryTop = entry.target.offsetTop;
              setCurrentIndex(scrollY < entryTop ? 0 : experiences.length - 1);
            }
          } else if (entry.intersectionRatio < 0.3 && isInExperience) {
            setIsInExperience(false);
          }
        });
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isInExperience]);

  const ExperienceCard = ({ exp, isActive, direction }) => (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto px-6"
        >
          <div className="flex flex-col lg:flex-row lg:gap-16 items-center lg:items-start">
            {/* Left Side - Year */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-end mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center lg:text-right"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b35, #f7931e, #ffdd00, #4fc3f7)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {exp.period}
                </motion.div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-0.5 mx-auto lg:ml-auto lg:mr-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #ff7b54, #42a5f5)'
                  }}
                />
              </motion.div>
            </div>

            {/* Right Side - Experience Details */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Duration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 text-sm font-medium text-gray-300 bg-white/10 rounded-full border border-white/20">
                    {exp.duration}
                  </span>
                </motion.div>

                {/* Role */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.4 },
                    y: { duration: 0.4, delay: 0.4 },
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }}
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%'
                  }}
                >
                  {exp.role}
                </motion.h2>


                {/* Company */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-lg md:text-xl font-medium text-gray-300"
                >
                  {exp.company}
                </motion.p>

                {/* Description */}
                <motion.div
                  className="space-y-3 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  {exp.description.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                        style={{
                          background: 'linear-gradient(45deg, #ff7b54, #42a5f5)'
                        }}
                      />
                      <p className="text-white/80 text-base leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative bg-black text-white w-full overflow-hidden min-h-screen"
      style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      <ExperienceAnimatedBackground className="z-0" />
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-10 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-6"
          >
            <div className="text-4xl md:text-5xl font-bold mb-6">
              <div className="flex flex-wrap justify-center items-baseline gap-3 md:gap-4">
                <TextGenerateEffect words="My" className="text-white" filter={true} duration={0.8} />
                <motion.span
                  className="inline-block font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Experience
                </motion.span>
              </div>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl">
              My professional journey in software development
            </p>
          </motion.div>
        </div>

        {/* Experience Display */}
        <div className="flex-1 flex items-start justify-center pt-12 min-h-0">
          {isInExperience ? (
            <div className="w-full" style={{ minHeight: '60vh' }}>
              <ExperienceCard
                exp={experiences[currentIndex]}
                isActive={true}
                direction={scrollDirection}
              />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/60 flex-1 flex items-center justify-center"
            >
              <p className="text-lg">Scroll to explore my experience</p>
            </motion.div>
          )}
        </div>

        {/* Scroll Hints */}
        <div className="flex-shrink-0 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center items-center gap-4"
          >
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-white/60 text-sm">Scroll to navigate</span>
              <motion.div
                animate={{ y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            </div>
            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: index === currentIndex ? '#ffffff' : 'rgba(255,255,255,0.3)'
                  }}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
