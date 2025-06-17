import thouChat from "../assets/thouchat-logo.png";
import macroForge from "../assets/macro-forge.png";
import skat from "../assets/skatspieler.png";
import Badge from "./Badge";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t] = useTranslation("global", { keyPrefix: "projects" });

  return (
    <div
      id="projects"
      className="bg-primary-500 flex flex-col items-center gap-20 px-5 py-20 lg:px-30 xl:px-90"
    >
      <div className="flex flex-col items-center gap-5">
        <h1
          id="work"
          className="font-jetbrains text-6xl font-bold text-white italic lg:text-8xl"
        >
          {t("title")}
        </h1>
        <p className="text-2xl text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          {t("description")}
        </p>
      </div>
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:flex-wrap">
        <ProjectCard
          link="https://github.com/lukaslangrock/backend-chan"
          title="ThouChat - Hackathon"
        >
          <img
            className="m-10 rounded-2xl shadow-lg shadow-gray-800"
            src={thouChat}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            {t("thouChat-description-1")}
            <br />
            <br />
            {t("thouChat-description-2")}
          </p>
          <div className="mt-5 flex flex-wrap gap-1">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>C#</Badge>
            <Badge>WebSockets</Badge>
          </div>
        </ProjectCard>
        <ProjectCard
          link="https://github.com/seanmaier/macro-forge"
          title="MacroForge"
        >
          <img
            className="shadow- m-10 rounded-2xl shadow-lg shadow-gray-800"
            src={macroForge}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            {t("macroForge-description-1")}
            <br />
            <br /> {t("macroForge-description-2")}
          </p>
          <div className="mt-5 flex flex-wrap gap-1">
            <Badge>C#</Badge>
            <Badge>WPF</Badge>
            <Badge>Windows API</Badge>
            <Badge>Event Handling</Badge>
          </div>
        </ProjectCard>
        <ProjectCard disabled title={"Skatfreunde Jöllenbeck"}>
          <img
            className="bg-creme m-10 rounded-2xl p-5 shadow-lg shadow-gray-800"
            src={skat}
          />
          <p className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            {t("skatfreunde-description-1")}
            <br />
            <br /> {t("skatfreunde-description-2")}
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
