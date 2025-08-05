import thouChat from "../assets/thouchat-logo.png";
import macroForge from "../assets/macro-forge.png";
import skat from "../assets/skatspieler.png";
import portfolio from "../assets/portfolio-logo.png";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const Projects = () => {
  const [t] = useTranslation("global", { keyPrefix: "projects" });

  return (
    <section
      id="projects"
      className="bg-primary-500 flex flex-col items-center gap-20 px-5 py-20 lg:px-30 xl:px-30"
    >
      <div className="flex flex-col items-center gap-5">
        <h2 id="work" className="text-white">
          {t("title")}
        </h2>
        <div className="text-2xl text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <Reveal>{t("description")}</Reveal>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:flex-wrap">
        <ProjectCard
            link="https://github.com/seanmaier/skatfreunde-backend"
          title={"Skatfreunde Jöllenbeck"}
          badges={[
            "React",
            "React-Router",
            "React-Forms",
            "Zod",
            "TypeScript",
            "C#",
            "EF Core",
            "REST API",
          ]}
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            className="bg-creme w-80 rounded-2xl p-5 shadow-lg shadow-gray-800 outline-2"
            src={skat}
          />
          <div className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <Reveal>{t("skatfreunde-description-1")}</Reveal>
            <br />
            <Reveal>
              <br /> {t("skatfreunde-description-2")}
            </Reveal>
          </div>
        </ProjectCard>
        <ProjectCard
          link="https://github.com/lukaslangrock/backend-chan"
          title="ThouChat - Hackathon"
          badges={["React", "TypeScript", "C#", "WebSockets"]}
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            className="w-80 rounded-2xl shadow-lg shadow-gray-800 outline-2"
            src={thouChat}
          />
          <div className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <Reveal>{t("thouChat-description-1")}</Reveal>
            <br />
            <br />
            <Reveal>{t("thouChat-description-2")}</Reveal>
          </div>
          <div className="flex flex-wrap gap-1"></div>
        </ProjectCard>
        <ProjectCard
          link="https://github.com/seanmaier/macro-forge"
          title="MacroForge"
          badges={["C#", "WPF", "Windows API", "Event Handling"]}
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            className="w-80 rounded-2xl shadow-lg shadow-gray-800 outline-2"
            src={macroForge}
          />
          <div className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <Reveal>{t("macroForge-description-1")}</Reveal>
            <br />
            <Reveal>
              <br /> {t("macroForge-description-2")}
            </Reveal>
          </div>
        </ProjectCard>
        <ProjectCard
            link="https://github.com/seanmaier/portfolio"
          title={"Portfolio Website"}
          badges={["React", "TypeScript", "Tailwind", "Animations", "Motion"]}
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            className="w-80 rounded-2xl bg-gray-700 p-5 shadow-lg shadow-gray-800 outline-2"
            src={portfolio}
          />
          <div className="text-white text-shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <Reveal>{t("portfolio-description")}</Reveal>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
