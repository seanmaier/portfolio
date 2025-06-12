import { useTranslation } from "react-i18next";
import BigBadge from "./BigBadge";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiReacthookform } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { DiDotnet } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPlotly } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import type { ReactNode } from "react";

type Badge = { skill: string; icon?: ReactNode };

interface Badges {
  frontend: Badge[];
  backend: Badge[];
  databases: Badge[];
  analytics: Badge[];
}

const badges: Badges = {
  frontend: [
    { skill: "HTML", icon: <FaHtml5 /> },
    { skill: "CSS", icon: <FaCss3Alt /> },
    { skill: "JavaScript", icon: <IoLogoJavascript /> },
    { skill: "TypeScript", icon: <BiLogoTypescript /> },
    { skill: "Tailwind", icon: <RiTailwindCssFill /> },
    { skill: "React", icon: <FaReact /> },
    { skill: "React-Hook-Forms", icon: <SiReacthookform /> },
    { skill: "React-Router", icon: <SiReactrouter /> },
    { skill: "Zustand" },
    { skill: "Zod", icon: <SiZod /> },
    { skill: "WPF", icon: <FaWpforms /> },
  ],
  backend: [
    { skill: "C#", icon: <PiFileCSharp /> },
    { skill: "ASP.NET Core", icon: <DiDotnet /> },
    { skill: "EF Core", icon: <FaDatabase /> },
    { skill: "REST API", icon: <AiOutlineApi /> },
  ],
  databases: [
    { skill: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { skill: "SQLite", icon: <SiSqlite /> },
  ],
  analytics: [
    { skill: "Python", icon: <FaPython /> },
    { skill: "Pandas", icon: <SiPandas /> },
    { skill: "NumPy", icon: <SiNumpy /> },
    { skill: "Matplotlib", icon: <SiPlotly /> },
  ],
};

const Experience = () => {
  const [t] = useTranslation("global", { keyPrefix: "experience" });

  return (
    <div
      id="experience"
      className="bg-creme it flex w-screen flex-col items-center justify-center gap-10 py-20 lg:px-100"
    >
      <h2 className="mb-10 text-center text-4xl font-bold italic lg:text-5xl">
        {t("title")}
      </h2>
      <h3 className="text-4xl">Frontend</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        {badges.frontend.map((badge, i) => (
          <BigBadge key={i} index={i} icon={badge.icon} title={badge.skill} />
        ))}
      </div>
      <h3 className="text-4xl">Backend</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        {badges.backend.map((badge, i) => (
          <BigBadge key={i} icon={badge.icon} index={i} title={badge.skill} />
        ))}
      </div>
      <h3 className="text-4xl">{t("databases")}</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        {badges.databases.map((badge, i) => (
          <BigBadge key={i} icon={badge.icon} index={i} title={badge.skill} />
        ))}
      </div>
      <h3 className="text-4xl">{t("analytics")}</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        {badges.analytics.map((badge, i) => (
          <BigBadge key={i} icon={badge.icon} index={i} title={badge.skill} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
