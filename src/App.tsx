import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Career />
      <Experience />
      <Projects />
      <Hobbies />
      <Footer />
    </>
  );
};

export default App;
