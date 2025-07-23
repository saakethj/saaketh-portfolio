import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutText from "./components/About";
import Experience from "./components/Experience";
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <AboutText />
      <Experience />
      <SkillsSection/>
    </div>
  );
}

export default App;
