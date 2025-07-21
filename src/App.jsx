import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutText from "./components/About";

function App() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <AboutText />
    </div>
  );
}

export default App;
