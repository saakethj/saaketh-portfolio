import BlurText from './BlurText';
import Carousel from './Carousel';

const About = () => {
  const handleAnimationComplete = () => {
    console.log("Blur animation done");
  };

  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Blur Text */}
        <div className="md:w-1/2 w-full">
          <BlurText
            text={`Hi, I'm Saaketh, a passionate Software Engineer currently working at BNP Paribas India Solutions, where I specialize in financial automation and reconciliation tools.`}
            delay={15}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg md:text-xl leading-relaxed font-[Inter,sans-serif] text-gray-300 mb-6"
          />

          <BlurText
            text={`I enjoy translating business needs into technical solutions. With a strong foundation in Python, SQL, and automation, I bring efficiency and precision to workflows while always exploring new tools in DevOps and CI/CD.`}
            delay={15}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg md:text-xl leading-relaxed font-[Inter,sans-serif] text-gray-300"
          />
        </div>

        {/* Right Side - Carousel */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div style={{ height: '400px', position: 'relative' }}>
            <Carousel
              baseWidth={320}
              autoplay={true}
              autoplayDelay={3500}
              pauseOnHover={true}
              loop={true}
              round={false}
              items={[
                {
                  title: "2+ Years Experience",
                  description: "Hands-on with IntelliMatch, Admin & Recollector tools.",
                  id: 1,
                  icon: "💼",
                },
                {
                  title: "Reconciliation Expert",
                  description: "Building robust workflows in financial systems.",
                  id: 2,
                  icon: "🔄",
                },
                {
                  title: "Python & SQL Developer",
                  description: "Writing scalable backend & data solutions.",
                  id: 3,
                  icon: "🐍",
                },
                {
                  title: "CI/CD Enthusiast",
                  description: "Streamlining delivery pipelines & automation.",
                  id: 4,
                  icon: "⚙️",
                },
                {
                  title: "BNP Paribas Engineer",
                  description: "Banking-grade software & business focus.",
                  id: 5,
                  icon: "🏦",
                },
              ]}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
