import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroQuote from "./components/HeroQuote";
import Hobbies from "./components/Hobbies";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <div className="spacer layer4" />
          <HeroQuote />
          <div className="spacer layer3" />
          <AboutMe />
          <div className="spacer layer1" />
          <Career />
          <div className="spacer layer2" />
          <Experience />
          <div className="spacer layer1" />
          <Projects />
          <div className="spacer layer2" />
          <Hobbies />
          <Footer />
        </>
      )}
      <LoadingScreen isLoading={isLoading} setIsLoading={setLoading} />
    </>
  );
};

export default App;
