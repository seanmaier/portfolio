import { useTranslation } from "react-i18next";
import Button from "./button/Button";
import { motion } from "motion/react";
import Badge from "./Badge";
import Reveal from "./Reveal";

interface Props {
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  noButton?: boolean;
  link?: string;
  badges?: string[];
  live?: boolean;
}

export const ProjectCard = ({
  children,
  title,
  disabled,
  noButton = false,
  link,
  badges,
  live,
}: Props) => {
  const [t] = useTranslation("global", { keyPrefix: "projects" });

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 1 }}
      className="flex justify-center"
    >
      <div className={`from-tertiary-300 to-secondary-500 lg:max-w-1xl flex max-w-lg flex-col gap-5 rounded-2xl bg-gradient-to-br p-10 shadow-md shadow-black${live ? " live-card" : ""}`}>
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-jetbrains text-center text-4xl font-bold text-white">
            <Reveal>{title}</Reveal>
          </h2>
          {live && (
            <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-black/20 px-2.5 py-1">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-bold tracking-wider text-green-400">
                LIVE
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-5">{children}</div>

        <div className="mt-auto flex flex-col gap-5">
          {badges && (
            <div className="flex flex-wrap justify-center gap-1">
              {badges.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
              ))}
            </div>
          )}
          {!noButton && (
            <Button
              onClick={() => window.open(link, "_blank")}
              fullWidth
              disabled={disabled}
              variant="dotted"
            >
              {disabled
                ? t("not-published")
                : live
                  ? t("visit-site")
                  : t("check-out")}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
