import thouChat from "../assets/thouchat-logo.png";
import macroForge from "../assets/macro-forge.png";
import skat from "../assets/skatspieler.png";
import Badge from "./Badge";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-primary-500 flex flex-col items-center gap-20 px-5 py-20 lg:px-30 xl:px-70">
      <h1
        id="work"
        className="font-jetbrains text-6xl font-bold text-white italic lg:text-8xl"
      >
        Projects
      </h1>
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:flex-wrap">
        <ProjectCard title="ThouChat - Hackathon">
          <img
            className="m-10 rounded-2xl bg-white shadow-lg shadow-gray-800"
            src={thouChat}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            A chat application built with React, TypeScript and C# over a
            weekend. It allows users to create accounts, join chat rooms, and
            send messages in real-time with a catch. Via a switch the user sends
            his messages in a shakespearean style.
            <br />
            <br />
            This was my first time working with web-sockets and working with a
            larger team of young devs. I learned aswell to present my work to a
            larger audience and illustrate its features.
          </p>
          <div className="mt-5 flex flex-wrap gap-1">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>C#</Badge>
            <Badge>WebSockets</Badge>
          </div>
        </ProjectCard>
        <ProjectCard title="MacroForge">
          <img
            className="shadow- m-10 rounded-2xl shadow-lg shadow-gray-800"
            src={macroForge}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            MacroForge is a macro recorder and editor for Windows, built with C#
            and WPF. It allows users to record their mouse and keyboard actions
            and replay them later. The project was a great opportunity to learn
            about Windows API, event handling, and user interface design.
            <br />
            <br />I learned how to work with the Windows API to capture mouse
            and keyboard events, as well as how to create a user-friendly
            interface using WPF. The project also taught me about the importance
            of testing and debugging in software development.
          </p>
          <div className="mt-5 flex flex-wrap gap-1">
            <Badge>C#</Badge>
            <Badge>WPF</Badge>
            <Badge>Windows API</Badge>
            <Badge>Event Handling</Badge>
          </div>
        </ProjectCard>
        <ProjectCard title={"Skatfreunde Jöllenbeck"}>
          <img
            className="shadow- bg-creme m-10 rounded-2xl shadow-lg shadow-gray-800"
            src={skat}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            Skatfreunde Jöllenbeck is a website built with React, TypeScript,
            and C#. It serves as a platform for the local Skat club to manage
            their members, events, and scores. The project was a great
            opportunity to learn about full-stack development and how to build a
            web application from scratch.
            <br />
            <br />I learned how to work with REST APIs, manage state in React,
            and how to deploy a web application using Node.js. The project also
            taught me about the importance of user experience and how to create
            a responsive design.
          </p>
          <div className="mt-5 flex flex-wrap gap-1">
            <Badge>React</Badge>
            <Badge>React-Router</Badge>
            <Badge>React-Forms</Badge>
            <Badge>Zod</Badge>
            <Badge>TypeScript</Badge>
            <Badge>C#</Badge>
            <Badge>EF Core</Badge>
            <Badge>REST API</Badge>
          </div>
        </ProjectCard>
        <ProjectCard title="Skatfreunde Jöllenbeck">
          <img
            className="shadow- bg-creme m-10 rounded-2xl shadow-lg shadow-gray-800"
            src={skat}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            Skatfreunde Jöllenbeck is a website built with React, TypeScript,
            and C#. It serves as a platform for the local Skat club to manage
            their members, events, and scores. The project was a great
            opportunity to learn about full-stack development and how to build a
            web application from scratch.
            <br />
            <br />I learned how to work with REST APIs, manage state in React,
            and how to deploy a web application using Node.js. The project also
            taught me about the importance of user experience and how to create
            a responsive design.
          </p>
          <div className="mt-5 flex flex-wrap gap-1">
            <Badge>React</Badge>
            <Badge>React-Router</Badge>
            <Badge>React-Forms</Badge>
            <Badge>Zod</Badge>
            <Badge>TypeScript</Badge>
            <Badge>C#</Badge>
            <Badge>EF Core</Badge>
            <Badge>REST API</Badge>
          </div>
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
