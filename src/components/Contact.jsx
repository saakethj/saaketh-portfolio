import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiExternalLink,
  FiCopy,
  FiCheck,
  FiMonitor,
  FiMessageCircle,
  FiUser,
  FiCode
} from 'react-icons/fi';

const ContactSection = () => {
  const [copied, setCopied] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  // Simulate online status animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleResumeDownload = () => {
    // Update this path to match your resume file location in the public folder
    const resumePath = `${import.meta.env.BASE_URL}/resume/Saaketh_resume.pdf`;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Saaketh_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = {
    email: "saaketh.jella123@gmail.com",
    phone: "+91-7288942007",
    location: "Mumbai, Maharashtra",
    timezone: "GMT +5:30",
    linkedin: "https://www.linkedin.com/in/jellasaaketh/",
    github: "https://github.com/saakethj",
    status: "Available for work",
    workType: "Remote/Hybrid OK"
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Subtle grid pattern */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236,72,153,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Connect
            </motion.span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's build something amazing together!
          </p>
        </motion.div>

        {/* Developer Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="max-w-6xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-xl border border-gray-600/60 rounded-t-lg p-4 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-white/80 text-sm">CONTACT TERMINAL</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-400 text-sm">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Content */}
          <motion.div 
            className="bg-gray-900/90 backdrop-blur-xl border-x border-b border-gray-600/60 rounded-b-lg p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* Top Row */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {/* Quick Connect */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <h3 className="text-blue-400 font-semibold text-lg flex items-center gap-2">
                  <FiPhone className="text-lg" />
                  QUICK CONNECT
                </h3>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleCopyToClipboard(contactInfo.email, 'email')}
                  >
                    <FiMail className="text-blue-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{contactInfo.email}</span>
                    {copied === 'email' ? 
                      <FiCheck className="text-green-400 ml-auto" /> : 
                      <FiCopy className="text-white/40 ml-auto" />
                    }
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleCopyToClipboard(contactInfo.phone, 'phone')}
                  >
                    <FiPhone className="text-blue-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{contactInfo.phone}</span>
                    {copied === 'phone' ? 
                      <FiCheck className="text-green-400 ml-auto" /> : 
                      <FiCopy className="text-white/40 ml-auto" />
                    }
                  </motion.div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <h3 className="text-pink-400 font-semibold text-lg flex items-center gap-2">
                  <FiMapPin className="text-lg" />
                  LOCATION
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg">
                    <FiMapPin className="text-pink-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg">
                    <FiClock className="text-pink-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{contactInfo.timezone}</span>
                  </div>
                </div>
              </motion.div>

              {/* Status */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <h3 className="text-purple-400 font-semibold text-lg flex items-center gap-2">
                  <FiMonitor className="text-lg" />
                  STATUS
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{contactInfo.status}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg">
                    <FiUser className="text-purple-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{contactInfo.workType}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              {/* Social Links */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.9 }}
              >
                <h3 className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
                  <FiExternalLink className="text-lg" />
                  SOCIAL LINKS
                </h3>
                <div className="space-y-3">
                  <motion.a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FiLinkedin className="text-cyan-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">→ LinkedIn Profile</span>
                    <FiExternalLink className="text-white/40 ml-auto" />
                  </motion.a>
                  <motion.a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FiGithub className="text-cyan-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">→ GitHub Repos</span>
                    <FiExternalLink className="text-white/40 ml-auto" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 2.1 }}
              >
                <h3 className="text-orange-400 font-semibold text-lg flex items-center gap-2">
                  <FiDownload className="text-lg" />
                  RESOURCES
                </h3>
                <div className="space-y-3">
                  <motion.button
                    onClick={handleResumeDownload}
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 w-full shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiDownload className="text-orange-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">→ Resume.pdf</span>
                    <div className="ml-auto text-white/40">⬇️</div>
                  </motion.button>
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FiCode className="text-orange-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">→ Portfolio Site</span>
                    <FiExternalLink className="text-white/40 ml-auto" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Let's Talk */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 2.3 }}
              >
                <h3 className="text-emerald-400 font-semibold text-lg flex items-center gap-2">
                  <FiMessageCircle className="text-lg" />
                  LET'S TALK
                </h3>
                <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-500/20">
                  <p className="text-white/90 text-sm leading-relaxed">
                    Ready to collaborate on your next project!
                  </p>
                  <motion.button
                    className="mt-3 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg text-white font-semibold text-sm hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;