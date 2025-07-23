import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiClock,
  FiDatabase,
  FiBarChart2,
  FiGitBranch,
  FiSettings,
  FiDollarSign,
  FiZap,
  FiCpu,
  FiServer,
  FiMonitor,
  FiHardDrive,
  FiWifi,
  FiLayers,
  FiCloud,
  FiShield,
  FiTool,
  FiTarget,
} from 'react-icons/fi';
import SkillsPanel from './SkillsPanel';

// Dynamic skills configuration - easy to modify and expand
const skillsConfig = {
  // Main skills that will be displayed
  mainSkills: [
    {
      icon: <FiCode />,
      title: 'Programming & Development',
      skills: ['Python', 'Batch Scripting', 'SQL Development', 'JavaScript', 'React.js'],
      color: '#ff6b35',
    },
    {
      icon: <FiDollarSign />,
      title: 'FinTech & Automation',
      skills: ['IntelliMatch', 'Recollector', 'AutoSys', 'Admin Module', 'SWIFT Messages'],
      color: '#00ff88',
    },
    {
      icon: <FiDatabase />,
      title: 'Data & Analytics',
      skills: ['MySQL', 'Power BI', 'Stored Procedures', 'RDL Reporting', 'Data Mining'],
      color: '#4ecdc4',
    },
    {
      icon: <FiGitBranch />,
      title: 'DevOps & Version Control',
      skills: ['GIT', 'GitHub', 'BitBucket', 'CI/CD Pipelines', 'Docker'],
      color: '#00ffff',
    },
    {
      icon: <FiZap />,
      title: 'Currently Learning',
      skills: ['DevOps Tools', 'Cloud Technologies', 'Microservices', 'Kubernetes', 'AWS'],
      color: '#ffaa00',
    },
  ],
  
  // Layout configuration
  layout: {
    preferredPerRow: 5,
    maxPerRow: 4,
    cardHeight: '400px',
    mobileCardHeight: '300px',
    gap: '16px',
  },
  
  // Animation settings
  animation: {
    expandRatio: 2.5,
    transitionDuration: 600,
    staggerDelay: 0.08,
  }
};

const SkillsSection = () => {
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);
  const { mainSkills, layout, animation } = skillsConfig;
  
  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Load fonts to match experience section
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

  // Enhanced floating particles
  const FloatingParticle = ({ delay = 0, startX = 0, startY = 0, color = '#00ffff', size = 'small' }) => {
    const sizeMap = {
      small: 'w-1.5 h-1.5',
      medium: 'w-2 h-2',
      large: 'w-3 h-3'
    };
    
    return (
      <motion.div
        className="absolute pointer-events-none"
        initial={{ x: startX, y: startY, opacity: 0 }}
        animate={{
          x: [startX, startX + 80, startX - 40, startX],
          y: [startY, startY - 60, startY + 30, startY],
          opacity: [0, 0.8, 0.4, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className={`${sizeMap[size]} rounded-full shadow-lg backdrop-blur-sm`}
          style={{ 
            backgroundColor: `${color}60`,
            boxShadow: `0 0 10px ${color}40`
          }}
        />
      </motion.div>
    );
  };

  // Enhanced background icons with more tech variety
  const BackgroundIcon = ({ delay = 0, startX = 0, startY = 0, icon, color = '#00ffff' }) => (
    <motion.div
      className="absolute pointer-events-none text-4xl opacity-10"
      initial={{ x: startX, y: startY, rotate: 0 }}
      animate={{
        x: [startX, startX + 30, startX - 15, startX],
        y: [startY, startY - 20, startY + 10, startY],
        rotate: [0, 90, 180, 270, 360],
        opacity: [0.05, 0.20, 0.10, 0.05],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ color: `${color}40` }}
    >
      {icon}
    </motion.div>
  );

  // Circuit pattern component
  const CircuitPattern = ({ delay = 0, startX = 0, startY = 0, color = '#00ffff' }) => (
    <motion.div
      className="absolute pointer-events-none opacity-15"
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        opacity: [0, 0.20, 0.08, 0.20, 0],
        scale: [1, 1.1, 0.9, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path
          d="M10 10h15v15M45 10h-15v15M10 50h15v-15M45 50h-15v-15M25 25h10v10"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.7"
        />
        <circle cx="25" cy="25" r="2" fill={color} opacity="0.9" />
        <circle cx="35" cy="35" r="2" fill={color} opacity="0.9" />
      </svg>
    </motion.div>
  );

  // Generate enhanced particles, background elements, and circuit patterns
  const particles = [];
  const backgroundIcons = [];
  const circuitPatterns = [];
  
  // More diverse tech icons
  const techIcons = [
    <FiCode />, <FiDatabase />, <FiGitBranch />, <FiSettings />, <FiBarChart2 />, 
    <FiCpu />, <FiServer />, <FiMonitor />, <FiHardDrive />, <FiWifi />, <FiLayers />,
    <FiCloud />, <FiShield />, <FiTool />, <FiTarget />
  ];
  
  for (let i = 0; i < 25; i++) {
    const skill = mainSkills[i % mainSkills.length];
    particles.push({
      delay: i * 1.2,
      startX: (i * 120 + Math.random() * 100) % windowWidth,
      startY: 50 + (i * 60) % 400,
      color: skill.color,
      size: ['small', 'medium', 'large'][i % 3],
    });
  }
  
  for (let i = 0; i < 15; i++) {
    const skill = mainSkills[i % mainSkills.length];
    backgroundIcons.push({
      delay: i * 3,
      startX: (i * 200 + Math.random() * 150) % windowWidth,
      startY: 100 + (i * 100) % 300,
      icon: techIcons[i % techIcons.length],
      color: skill.color,
    });
  }

  // Add more circuit patterns
  for (let i = 0; i < 12; i++) {
    const skill = mainSkills[i % mainSkills.length];
    circuitPatterns.push({
      delay: i * 4,
      startX: (i * 180 + Math.random() * 120) % windowWidth,
      startY: 80 + (i * 90) % 350,
      color: skill.color,
    });
  }

  // Calculate layout based on screen size
  const getLayoutConfig = () => {
    if (isMobile) {
      return {
        skillsPerRow: 1,
        rows: [mainSkills] // All skills in separate rows on mobile
      };
    } else if (windowWidth < 1024) {
      // Tablet
      return {
        skillsPerRow: 2,
        rows: [
          mainSkills.filter((_, i) => i % 2 === 0),
          mainSkills.filter((_, i) => i % 2 === 1)
        ]
      };
    } else {
      // Desktop
      const shouldUseRows = mainSkills.length > layout.preferredPerRow;
      const skillsPerRow = shouldUseRows ? Math.ceil(mainSkills.length / 2) : mainSkills.length;
      
      return {
        skillsPerRow,
        rows: shouldUseRows 
          ? [mainSkills.slice(0, skillsPerRow), mainSkills.slice(skillsPerRow)]
          : [mainSkills]
      };
    }
  };

  const layoutConfig = getLayoutConfig();

  const SkillsRow = ({ skills, rowIndex = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2 + (rowIndex * 0.1) }}
      className={`flex w-full ${isMobile ? 'flex-col space-y-4' : 'gap-4'}`}
      style={{ 
        minHeight: isMobile ? 'auto' : layout.cardHeight
      }}
    >
      {skills.map((panel, idx) => (
        <motion.div
          key={`${rowIndex}-${idx}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: (rowIndex * layoutConfig.skillsPerRow + idx) * animation.staggerDelay 
          }}
          className={isMobile ? 'w-full' : 'flex-1'}
          style={{
            minHeight: isMobile ? layout.mobileCardHeight : layout.cardHeight
          }}
        >
          <SkillsPanel 
            {...panel} 
            expandRatio={isMobile ? 1 : animation.expandRatio}
            transitionDuration={animation.transitionDuration}
            isMobile={isMobile}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section 
      id="skills" 
      className="relative bg-black text-white py-20 px-6 md:px-12 min-h-screen overflow-hidden"
      style={{ fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Enhanced Animated Background with black top/bottom */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Black gradient at top and bottom, tech effects in middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
        
        {/* Enhanced center tech glow effect - positioned in middle third */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,255,0.06) 0%, transparent 60%)",
              "radial-gradient(ellipse 85% 65% at 50% 50%, rgba(255,107,53,0.05) 0%, transparent 60%)",
              "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(78,205,196,0.07) 0%, transparent 60%)",
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,255,0.06) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced floating particles */}
        {particles.map((particle, index) => (
          <FloatingParticle
            key={`particle-${index}`}
            delay={particle.delay}
            startX={particle.startX}
            startY={particle.startY}
            color={particle.color}
            size={particle.size}
          />
        ))}

        {/* Background tech icons with more variety and better visibility */}
        {backgroundIcons.map((iconData, index) => (
          <BackgroundIcon
            key={`bg-icon-${index}`}
            delay={iconData.delay}
            startX={iconData.startX}
            startY={iconData.startY}
            icon={iconData.icon}
            color={iconData.color}
          />
        ))}

        {/* Enhanced circuit patterns for tech feel */}
        {circuitPatterns.map((pattern, index) => (
          <CircuitPattern
            key={`circuit-${index}`}
            delay={pattern.delay}
            startX={pattern.startX}
            startY={pattern.startY}
            color={pattern.color}
          />
        ))}

        {/* Enhanced grid pattern with better tech feel */}
        <motion.div 
          className="absolute inset-0"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,53,0.10) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Additional animated tech lines - more prominent in middle */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px opacity-20"
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.4) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.35) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(78,205,196,0.4) 50%, transparent 100%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-2/3 left-0 w-full h-px opacity-20"
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(78,205,196,0.4) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.4) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.35) 50%, transparent 100%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Diagonal tech lines for more dynamic feel */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-8"
          style={{
            background: `
              linear-gradient(45deg, transparent 0%, rgba(0,255,255,0.08) 1px, transparent 2px),
              linear-gradient(-45deg, transparent 0%, rgba(255,107,53,0.06) 1px, transparent 2px)
            `,
            backgroundSize: '100px 100px'
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Section Title with Better Gradient and Slower Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{' '}
            <motion.span 
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
              }}
              transition={{
                duration: 6, // Increased duration for slower animation
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 // Added delay
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              Skills
            </motion.span>
          </h2>
          <p className="text-white/70 text-lg font-medium">
            {isMobile 
              ? 'Explore my technical expertise across different domains'
              : layoutConfig.rows.length > 1 
                ? 'Explore my technical expertise across different domains' 
                : 'Hover over each panel to explore my technical expertise'
            }
          </p>
        </motion.div>

        {/* Skills Container */}
        <div className="skills-container space-y-6">
          {layoutConfig.rows.map((skills, rowIndex) => (
            <SkillsRow key={rowIndex} skills={skills} rowIndex={rowIndex} />
          ))}
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-12 gap-4"
        >
          {mainSkills.slice(0, Math.min(6, mainSkills.length)).map((skill, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full shadow-lg"
              style={{ 
                backgroundColor: `${skill.color}80`,
                boxShadow: `0 0 8px ${skill.color}40`
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                delay: index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Skills count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-white/50 text-sm font-medium">
            {mainSkills.length} Core Technology Areas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;