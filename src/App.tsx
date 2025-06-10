import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
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
      <Experience />
      <Projects />
      <Hobbies />
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Contact me</h1>
      </div>
    </>
  );
};

export default App;
