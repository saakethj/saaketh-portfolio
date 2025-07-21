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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Left Side - Blur Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-start">
          <BlurText
            text={`Hi, I'm Saaketh, a passionate Software Engineer currently working at BNP Paribas India Solutions, where I specialize in financial automation and reconciliation tools.`}
            delay={15}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg md:text-xl leading-relaxed font-semibold font-[Inter,sans-serif] text-gray-200 mb-6"
          />

          <BlurText
            text={`I enjoy translating business needs into technical solutions. With a strong foundation in Python, SQL, and automation, I bring efficiency and precision to workflows while always exploring new tools in DevOps and CI/CD.`}
            delay={15}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg md:text-xl leading-relaxed font-medium font-[Inter,sans-serif] text-gray-200 mb-6"
          />

          {/* You can add more BlurText sections here and the carousel will maintain alignment */}
          {/* Example of additional text:
          <BlurText
            text={`Additional paragraph about your skills, achievements, or any other information you want to share.`}
            delay={15}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg md:text-xl leading-relaxed font-medium font-[Inter,sans-serif] text-gray-200"
          />
          */}
        </div>

        {/* Right Side - Carousel */}
        <div className="md:w-1/2 w-full flex items-start justify-center md:justify-end">
          <div className="mt-0 w-full max-w-md">
            <Carousel
              baseWidth={400}
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
                  // You can add an image like this:
                  // image: "https://your-domain.com/experience-icon.jpg"
                },
                {
                  title: "Financial Systems Expert",
                  description: "Building robust reconciliation workflows and automation solutions for banking operations.",
                  id: 2,
                  icon: "🔄",
                  // image: "https://your-domain.com/finance-icon.jpg"
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
                  // image: "https://your-domain.com/devops-icon.jpg"
                },
                {
                  title: "BNP Paribas Engineer",
                  description: "Currently positioned as Associate Software Engineer - I.",
                  id: 5,
                  icon: "🏦",
                  // image: "https://your-domain.com/bnp-logo.png"
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