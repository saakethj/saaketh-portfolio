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
    FiSend
} from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/saakethj", label: "GitHub" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/jellasaaketh/", label: "LinkedIn" },
        { icon: FiTwitter, href: "https://twitter.com/SaakethJ", label: "Twitter" },
        { icon: FiInstagram, href: "https://instagram.com/saaketh_jella01", label: "Instagram" },
        { icon: FiMail, href: "saaketh.jella123@gmail.com", label: "Email" }
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black text-white border-t border-white/10">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                    <FiCode className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-xl font-bold">JELLA Saaketh</span>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                                Passionate software engineer crafting digital experiences with clean code and innovative solutions.
                                Always learning, always building.
                            </p>
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                                <FiMapPin className="w-4 h-4" />
                                Mumbai, Maharashtra, India
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h4 className="font-semibold mb-4 text-white/90">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className="font-semibold mb-4 text-white/90">Let's Connect</h4>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center transition-all duration-200 group"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Quick Contact */}
                            <div className="space-y-2">
                                <a
                                    href="mailto:your.email@gmail.com"
                                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200 group"
                                >
                                    <FiSend className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                                    Get in touch
                                </a>
                                <a
                                    href={`${import.meta.env.BASE_URL}/resume/Saaketh_resume.pdf`}
                                    download
                                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200 group"
                                >
                                    <span className="w-4 h-4 flex items-center justify-center">📄</span>
                                    Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-2 text-white/60 text-sm"
                        >
                            <span>© {currentYear} Built with</span>
                            <FiHeart className="w-4 h-4 text-red-400" />
                            <span>and</span>
                            <FiCoffee className="w-4 h-4 text-amber-400" />
                            <span>by Your Name</span>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center gap-4 text-white/50 text-xs"
                        >
                            <span>React</span>
                            <span>•</span>
                            <span>Framer Motion</span>
                            <span>•</span>
                            <span>Tailwind CSS</span>
                            <span>•</span>
                            <span>Vercel</span>
                        </motion.div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center transition-all duration-200 group"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Back to top"
                        >
                            <FiArrowUp className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200" />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
                    }}
                />
            </div>
        </footer>
    );
};

export default Footer;