import TypeWriter from "./Typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white mt-[64px] py-16 w-full" // padding top avoids navbar overlap
    >
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent mb-4">
          Saaketh Jella
        </h1>

        <TypeWriter key="Software Engineer at BNP Paribas" text="Software Engineer at BNP Paribas" />



        <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
          Detail-oriented Software Engineer with 2+ years of experience in financial automation,
          reconciliation tools, and workflow optimization. Passionate about building scalable solutions
          that streamline operations and reduce manual effort.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded hover:bg-cyan-400 hover:text-black transition"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded hover:bg-cyan-400 hover:text-black transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
