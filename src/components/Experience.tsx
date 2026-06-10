import { useTranslation } from "react-i18next";
import BigBadge from "./BigBadge";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaDatabase, FaLinux } from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { DiDotnet } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { SiGraphql, SiSqlite, SiDocker, SiGithubactions } from "react-icons/si";
import { VscTerminalBash, VscAzure } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import React, { useState, type ReactNode } from "react";
import { motion } from "motion/react";

type Badge = { skill: string; icon?: ReactNode };

interface Badges {
  frontend: Badge[];
  backend: Badge[];
  databases: Badge[];
  devops: Badge[];
}

const badges: Badges = {
  frontend: [
    { skill: "TypeScript", icon: <BiLogoTypescript /> },
    { skill: "React", icon: <FaReact /> },
    { skill: "Tailwind", icon: <RiTailwindCssFill /> },
  ],
  backend: [
    { skill: "C#", icon: <PiFileCSharp /> },
    { skill: ".NET", icon: <DiDotnet /> },
    { skill: "Blazor Server" },
    { skill: "EF Core", icon: <FaDatabase /> },
    { skill: "GraphQL", icon: <SiGraphql /> },
    { skill: "CLI Tools", icon: <VscTerminalBash /> },
    { skill: "REST API", icon: <AiOutlineApi /> },
  ],
  databases: [
    { skill: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { skill: "SQLite", icon: <SiSqlite /> },
  ],
  devops: [
    { skill: "Azure", icon: <VscAzure /> },
    { skill: "Docker", icon: <SiDocker /> },
    { skill: "Linux", icon: <FaLinux /> },
    { skill: "CI/CD", icon: <SiGithubactions /> },
  ],
};

function repeatToLength<T>(arr: T[], minLength: number): T[] {
  const result: T[] = [];
  while (result.length < minLength) result.push(...arr);
  return result.slice(0, minLength);
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

interface GroupProps {
  title: string;
  items: Badge[];
}

const CompactGroup = ({ title, items }: GroupProps) => (
  <div className="flex flex-col gap-4">
    <h3 className="border-primary-300 border-b-2 pb-2 text-2xl font-bold">
      {title}
    </h3>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-wrap gap-3"
    >
      {items.map((badge, i) => (
        <motion.div key={i} variants={badgeVariants}>
          <BigBadge compact className="text-white" title={badge.skill} icon={badge.icon} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Experience = () => {
  const [t] = useTranslation("global", { keyPrefix: "experience" });
  const [compact, setCompact] = useState(false);

  return (
    <section
      id="experience"
      className="bg-creme flex w-screen flex-col items-center justify-center gap-10 py-20"
    >
      <div className="mb-10 flex flex-col justify-center gap-8 text-center">
        <h2 className="text-4xl lg:text-5xl">{t("title")}</h2>
        <div className="flex items-center justify-center gap-5">
          <span className="text-2xl font-bold">{t("compact")}</span>
          <label className="switch">
            <input type="checkbox" onClick={() => setCompact(!compact)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      {compact ? (
        <div className="grid w-full max-w-4xl gap-10 px-8 md:grid-cols-2">
          <CompactGroup title="Frontend" items={badges.frontend} />
          <CompactGroup title="Backend" items={badges.backend} />
          <CompactGroup title={t("databases")} items={badges.databases} />
          <CompactGroup title={t("devops")} items={badges.devops} />
        </div>
      ) : (
        <>
          <h3>Frontend</h3>
          <div className="wrapper">
            {repeatToLength(badges.frontend, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemLeft"
                style={{ "--n": i + 1, "--count": arr.length } as React.CSSProperties}
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
          <h3>Backend</h3>
          <div className="wrapper">
            {repeatToLength(badges.backend, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemRight"
                style={{ "--n": i + 1, "--count": arr.length } as React.CSSProperties}
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
          <h3>{t("databases")}</h3>
          <div className="wrapper">
            {repeatToLength(badges.databases, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemLeft"
                style={{ "--n": i + 1, "--count": arr.length } as React.CSSProperties}
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
          <h3>{t("devops")}</h3>
          <div className="wrapper">
            {repeatToLength(badges.devops, 8).map((badge, i, arr) => (
              <BigBadge
                key={i}
                className="itemRight"
                style={{ "--n": i + 1, "--count": arr.length } as React.CSSProperties}
                title={badge.skill}
                icon={badge.icon}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Experience;
