// App.tsx
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalaxyBackground from "./components/GalaxyBackground";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Proyect from "./components/Proyect";
import SkillIcon from "./components/SkillIcon";
import WhoAmI from "./components/WhoIam";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen relative">
        <GalaxyBackground />
        <div className="relative z-10">
          <Navbar/>
          <section id="home" className="w-full">
            <Header/>
          </section>
          <section id="about" className="w-full">
            <WhoAmI />
          </section>
          <section id="projects" className="w-full">
            <Proyect />
          </section>
          <section id="skills" className="w-full">
            <SkillIcon />
          </section>
          <section id="contact" className="w-full">
            <Contact />
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;
