import BlurText from './BlurText';
import Carousel from './Carousel'; // Back to original
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';

const About = () => {
  const handleAnimationComplete = () => {
    console.log("Blur animation done");
  };

  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header with Mobile-Friendly TextGenerateEffect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-4xl md:text-5xl font-bold mb-4">
            <div className="flex flex-wrap justify-center items-baseline gap-2 md:gap-3">
              <TextGenerateEffect 
                words="About"
                className="text-center"
                filter={true}
                duration={0.8}
              />
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                style={{
                  backgroundSize: '200% 200%',
                  animationDuration: '4s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                Me
              </motion.span>
            </div>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg px-4">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12">

          {/* Left Side - Clean Highlighted Bio Text with Gradients */}
          <motion.div
            className="lg:w-1/2 w-full flex flex-col justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* First Paragraph with BNP Paribas Gradient */}
            <div className="text-lg md:text-xl leading-relaxed font-semibold font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>Hi, I'm Saaketh, a passionate Software Engineer currently working at </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
                BNP Paribas India Solutions
              </span>
              <span>, where I specialize in financial automation and reconciliation tools.</span>
            </div>

            {/* Second Paragraph with Python/SQL and DevOps Gradients */}
            <div className="text-lg md:text-xl leading-relaxed font-medium font-[Inter,sans-serif] text-gray-200 mb-6">
              <span>I enjoy translating business needs into technical solutions. With a strong foundation in </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent font-bold">
                Python, SQL
              </span>
              <span>, and automation, I bring efficiency and precision to workflows while always exploring new tools in </span>
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold">
                DevOps
              </span>
              <span> and CI/CD.</span>
            </div>
          </motion.div>

          {/* Right Side - Carousel with fixed responsive width */}
          <motion.div
            className="lg:w-1/2 w-full flex items-start justify-center lg:justify-end lg:pr-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full lg:ml-auto lg:mr-0 max-w-sm lg:max-w-md mx-auto lg:mx-0">
              <Carousel
                baseWidth={typeof window !== 'undefined' ?
                  window.innerWidth < 1024 ? Math.min(350, window.innerWidth - 60) : 400
                  : 350}
                autoplay={true}
                autoplayDelay={3500}
                pauseOnHover={true}
                loop={true}
                round={false}
                items={[
                  {
                    title: "2+ Years Experience",
                    description: "Hands-on experience with IntelliMatch, Admin & Recollector tools at BNP Paribas India Solutions.",
                    id: 1,
                    icon: "💼",
                  },
                  {
                    title: "Financial Systems Expert",
                    description: "Building robust reconciliation workflows and automation solutions for banking operations.",
                    id: 2,
                    icon: "🔄",
                  },
                  {
                    title: "Python & SQL Developer",
                    description: "Having fundamental knowledge in python for scripting and SQL for databases",
                    id: 3,
                    icon: "🐍",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                  },
                  {
                    title: "DevOps & CI/CD",
                    description: "Currently exploring DevOps tools and CI/CD Pipelines.",
                    id: 4,
                    icon: "⚙️",
                  },
                  {
                    title: "BNP Paribas Engineer",
                    description: "Currently positioned as Associate Software Engineer - I.",
                    id: 5,
                    icon: "🏦",
                  },
                ]}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;