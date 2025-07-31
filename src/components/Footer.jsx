import React from 'react';
import { motion } from 'framer-motion';
import {
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiMail,
    FiInstagram,
    FiMapPin,
    FiHeart,
    FiArrowUp,
    FiCoffee,
    FiCode,
    FiSend,
    FiDownload,
    FiExternalLink
} from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/saakethj", label: "GitHub", color: "#ffffff" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/jellasaaketh/", label: "LinkedIn", color: "#0077b5" },
        { icon: FiTwitter, href: "https://twitter.com/SaakethJ", label: "Twitter", color: "#1da1f2" },
        { icon: FiInstagram, href: "https://instagram.com/saaketh_jella01", label: "Instagram", color: "#e4405f" },
        { icon: FiMail, href: "mailto:saaketh.jella123@gmail.com", label: "Email", color: "#ea4335" },
        { icon: FiCode, href: "https://codepen.io/saakethj-the-styleful", label: "CodePen", color: "#000000" },
        { icon: FiExternalLink, href: "https://dev.to/saakethj", label: "Dev.to", color: "#0a0a0a" },
        { icon: FiSend, href: "https://telegram.me/saakethj", label: "Telegram", color: "#0088cc" }
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black text-white">
            {/* Enhanced Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Base black background */}
                <div className="absolute inset-0 bg-black" />

                {/* Subtle gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-gray-800/4 to-gray-700/3 rounded-full blur-3xl"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -10, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-zinc-800/5 to-stone-800/3 rounded-full blur-3xl"
                    animate={{
                        x: [0, -15, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Top border gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Enhanced Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    JELLA Saaketh
                                </h3>
                                <div className="mt-2">
                                    <p className="text-m text-pink-400/80">Software Engineer</p>
                                </div>
                            </div>
                            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                                Passionate software engineer crafting digital experiences with clean code and innovative solutions.
                                Always learning, always building something amazing.
                            </p>

                            {/* Status indicator */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-emerald-400"
                                        animate={{
                                            opacity: [1, 0.5, 1],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-emerald-400 text-sm font-medium">Available for work</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-white/60 text-sm">
                                <FiMapPin className="w-4 h-4" />
                                Mumbai, Maharashtra, India
                            </div>
                        </motion.div>
                    </div>

                    {/* Enhanced Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <h4 className="font-semibold mb-6 text-white/90 text-lg">Quick Links</h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <motion.a
                                            href={link.href}
                                            className="text-white/60 hover:text-white text-sm transition-all duration-300 flex items-center gap-3 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.span
                                                className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-blue-400 transition-all duration-300"
                                                whileHover={{ scale: 1.5 }}
                                            />
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Enhanced Connect Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h4 className="font-semibold mb-6 text-white/90 text-lg">Let's Connect</h4>

                            {/* Enhanced Social Links - 2 rows, 4 icons each */}
                            <div className="grid grid-cols-4 gap-3 mb-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group relative"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            y: -3,
                                            boxShadow: `0 10px 25px ${social.color}20`
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon
                                            className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300"
                                            style={{
                                                color: social.href.includes('mailto') ? social.color : undefined
                                            }}
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Enhanced Quick Actions */}
                            <div className="space-y-3">
                                <motion.a
                                    href="mailto:saaketh.jella123@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white text-sm transition-all duration-300 group"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        x: 5,
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                                    }}
                                >
                                    <FiSend className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                                    Get in touch
                                    <FiExternalLink className="w-3 h-3 ml-auto opacity-60" />
                                </motion.a>

                                <motion.a
                                    href={`${import.meta.env.BASE_URL}/resume/Saaketh_resume.pdf`}
                                    download
                                    className="flex items-center gap-3 p-3 rounded-lg text-white/70 hover:text-white text-sm transition-all duration-300 group"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        x: 5,
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                                    }}
                                >
                                    <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
                                    Download Resume
                                    <span className="w-4 h-4 flex items-center justify-center ml-auto text-xs">📄</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Enhanced Bottom Bar */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* Enhanced Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-2 text-white/60 text-sm"
                        >
                            <span>© {currentYear} Built with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <FiHeart className="w-4 h-4 text-red-400" />
                            </motion.div>
                            <span>and lots of</span>
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FiCoffee className="w-4 h-4 text-amber-400" />
                            </motion.div>
                            <span>by Saaketh Jella</span>
                        </motion.div>

                        {/* Enhanced Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center gap-4 text-white/50 text-xs"
                        >
                            <span className="hover:text-white/70 transition-colors cursor-default">React</span>
                            <span>•</span>
                            <span className="hover:text-white/70 transition-colors cursor-default">Framer Motion</span>
                            <span>•</span>
                            <span className="hover:text-white/70 transition-colors cursor-default">Tailwind CSS</span>
                            <span>•</span>
                            <span className="hover:text-white/70 transition-colors cursor-default">Vercel</span>
                        </motion.div>

                        {/* Enhanced Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -3,
                                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Back to top"
                        >
                            <FiArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;