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
import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

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

function repeatToLength<T>(arr: T[], minLength: number): T[] {
  const result = [];
  while (result.length < minLength) {
    result.push(...arr);
  }
  return result.slice(0, minLength);
}

const Experience = () => {
  const [t] = useTranslation("global", { keyPrefix: "experience" });
  const [compact, setCompact] = useState(false);

  return (
    <div
      id="experience"
      className="bg-creme it flex w-screen flex-col items-center justify-center gap-10 py-20"
    >
      <div className="mb-10 flex flex-col justify-center gap-8 text-center">
        <h2 className="text-4xl font-bold italic lg:text-5xl">{t("title")}</h2>
        <div className="flex items-center justify-center gap-5">
          <span className="text-2xl font-bold">{t("compact")}</span>
          <label className="switch">
            <input type="checkbox" onClick={() => setCompact(!compact)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      {compact ? (
        <div className="flex flex-col items-center gap-15">
          <h3 className="text-4xl font-bold">Frontend</h3>
          <div className="flex max-w-xl flex-wrap justify-center gap-5">
            {badges.frontend.map((badge, i, arr) => (
              <motion.div whileHover={{ scale: 1.05 }}>
                <BigBadge
                  key={i}
                  className="text-white"
                  compact
                  style={
                    {
                      "--n": i + 1,
                      "--count": arr.length,
                    } as React.CSSProperties
                  }
                  title={badge.skill}
                  icon={badge.icon}
                />
              </motion.div>
            ))}
          </div>
          <h3 className="text-4xl font-bold">Backend</h3>
          <div className="flex max-w-xl flex-wrap justify-center gap-5">
            {badges.backend.map((badge, i, arr) => (
              <motion.div whileHover={{ scale: 1.05 }}>
                <BigBadge
                  key={i}
                  className="text-white"
                  compact
                  style={
                    {
                      "--n": i + 1,
                      "--count": arr.length,
                    } as React.CSSProperties
                  }
                  title={badge.skill}
                  icon={badge.icon}
                />
              </motion.div>
            ))}
          </div>
          <h3 className="text-4xl font-bold">{t("databases")}</h3>
          <div className="flex max-w-xl flex-wrap justify-center gap-5">
            {badges.databases.map((badge, i, arr) => (
              <motion.div whileHover={{ scale: 1.05 }}>
                <BigBadge
                  key={i}
                  className="text-white"
                  compact
                  style={
                    {
                      "--n": i + 1,
                      "--count": arr.length,
                    } as React.CSSProperties
                  }
                  title={badge.skill}
                  icon={badge.icon}
                />
              </motion.div>
            ))}
          </div>
          <h3 className="text-4xl font-bold">{t("analytics")}</h3>
          <div className="flex max-w-xl flex-wrap justify-center gap-5">
            {badges.analytics.map((badge, i, arr) => (
              <motion.div whileHover={{ scale: 1.05 }}>
                <BigBadge
                  key={i}
                  className="text-white"
                  compact
                  style={
                    {
                      "--n": i + 1,
                      "--count": arr.length,
                    } as React.CSSProperties
                  }
                  title={badge.skill}
                  icon={badge.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-4xl font-bold">Frontend</h3>
          <div className="wrapper">
            {badges.frontend.map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemLeft"
                style={
                  { "--n": i + 1, "--count": arr.length } as React.CSSProperties
                }
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
          <h3 className="text-4xl font-bold">Backend</h3>
          <div className="wrapper">
            {repeatToLength(badges.backend, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemRight"
                style={
                  { "--n": i + 1, "--count": arr.length } as React.CSSProperties
                }
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
          <h3 className="text-4xl font-bold">{t("databases")}</h3>
          <div className="wrapper">
            {repeatToLength(badges.databases, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemLeft"
                style={
                  { "--n": i + 1, "--count": arr.length } as React.CSSProperties
                }
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
          <h3 className="text-4xl font-bold">{t("analytics")}</h3>
          <div className="wrapper">
            {repeatToLength(badges.analytics, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemRight"
                style={
                  { "--n": i + 1, "--count": arr.length } as React.CSSProperties
                }
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
