import { lazy, Suspense, useState } from "react";
import Hero from "./components/Hero";
import HeroQuote from "./components/HeroQuote";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

const Career = lazy(() => import("./components/Career"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Hobbies = lazy(() => import("./components/Hobbies"));
const Certificates = lazy(() => import("./components/Certificates"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
        <div className="spacer layer4" />
        <HeroQuote />
        <div className="spacer layer3" />
        <AboutMe />
        <Suspense fallback={null}>
          <div className="spacer layer1" />
          <Career />
          <div className="spacer layer2" />
          <Experience />
          <div className="spacer layer1" />
          <Projects />
          <div className="spacer layer2" />
          <Hobbies />
          <div className="spacer layer1" />
          <Certificates />
          <Footer />
        </Suspense>
      </div>
      <LoadingScreen isLoading={isLoading} setIsLoading={setLoading} />
    </>
  );
};

export default App;
