import { motion } from "framer-motion";
// import TypeWriter from "./Typewriter";
import TextType from "./TextType";
import Aurora from "./Aurora";
import GradientText from "./GradientText";



// Variants for animation
const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" }
    }
};

const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
    }
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-black text-white pt-24 md:pt-32 py-12 md:py-20 w-full overflow-hidden"
        >
            {/* Aurora Background */}
            <Aurora
                colorStops={["#1a1a40", "#ff6a00", "#ffb347"]}
                blend={0.4}
                amplitude={1.2}
                speed={0.5}
            />
            {/* Minimal animated glow background */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[160px] opacity-10 top-[-100px] left-[10%] -z-10 pointer-events-none"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main Layout */}
            <div className="relative z-10  max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">

                {/* LEFT: Text Section */}
                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    animate="visible"
                    className="md:w-1/2 w-full mb-10 md:mb-0 md:pr-8"
                >
                    <GradientText
                        colors={["#ffffffff", "#375d7fff", "#785e42ff", "#ffffffff"]}
                        animationSpeed={7}
                        showBorder={false}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        <span style={{ fontWeight: 800, fontFamily: "Inter, sans-serif" }}>
                            Hi, I'm Saaketh
                        </span>
                    </GradientText>

                    <div className="text-xl md:text-2xl text-gray-300 font-medium mb-6 font-mono">
                        <TextType
                            text={["Software Engineer at BNP Paribas"]}
                            typingSpeed={60}
                            pauseDuration={4000}
                            showCursor={true}
                            cursorCharacter="_"
                            className="text-xl md:text-2xl text-gray-300 font-medium font-mono"
                        />

                        {/* <TypeWriter text="Software Engineer at BNP Paribas" /> */}
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg font-medium"
                       style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, letterSpacing: "0.025em" }}>
                        Software Engineer at BNP Paribas with over 2 years of experience 
                        specializing in reconciliation workflows using IntelliMatch. 
                        Proficient in SQL & Python. Enthusiastic about CI/CD and DevOps tools.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8" style={{ fontFamily: "Inter, sans-serif" }}>
                        <a
                            href="#contact"
                            className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-400 transition duration-300 shadow-lg hover:shadow-blue-500/25"
                            style={{ 
                                fontFamily: "Inter, sans-serif", 
                                fontWeight: 500,
                                textDecoration: 'none'
                            }}
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-6 py-3 border-2 border-orange-500 text-orange-400 font-medium rounded-lg hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-400 transition duration-300 shadow-lg hover:shadow-orange-500/25"
                            style={{ 
                                fontFamily: "Inter, sans-serif", 
                                fontWeight: 500,
                                textDecoration: 'none'
                            }}
                        >
                            View My Work
                        </a>
                    </div>

                </motion.div>

                {/* RIGHT: Image Section */}
                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    animate="visible"
                    className="md:w-1/2 w-full flex justify-center md:justify-end"
                >
                    <div className="relative">
                        <img
                            src={`${import.meta.env.BASE_URL}Saaketh_profile_pic.jpg`}
                            alt="Saaketh"
                            className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] object-cover object-center shadow-2xl rounded-full"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1)',
                                imageRendering: 'auto',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)',
                            }}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;