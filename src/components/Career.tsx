import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { type ReactNode } from "react";

interface ItemProps {
  index: number;
  isCurrent?: boolean;
  date: string;
  heading: ReactNode;
  children: ReactNode;
}

const TimelineItem = ({ index, isCurrent, date, heading, children }: ItemProps) => {
  const isEven = index % 2 === 0;

  const dot = (
    <div
      className={`relative z-10 h-4 w-4 xl:h-5 xl:w-5 rounded-full bg-secondary-400 shadow-md ring-4 ring-primary-500 ${isCurrent ? "dot-current" : ""}`}
    />
  );

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-2xl xl:rounded-3xl bg-gradient-to-br from-primary-800 to-primary-600 p-7 xl:p-10 shadow-xl shadow-black/50"
    >
      <div className="mb-2 font-jetbrains text-xl xl:text-2xl font-bold text-white">
        {heading}
      </div>
      <span className="mb-4 inline-block rounded-full bg-secondary-500/20 px-3 xl:px-4 py-0.5 xl:py-1 text-sm xl:text-base font-medium text-secondary-300">
        {date}
      </span>
      <div className="text-base xl:text-lg leading-relaxed text-white/80">{children}</div>
    </motion.div>
  );

  return (
    <div className="relative">
      {/* ── Mobile layout (single column, dot on left) ─────────────────── */}
      <div className="flex items-start gap-4 lg:hidden">
        <div className="flex w-3.5 flex-shrink-0 flex-col items-center pt-5">
          {dot}
        </div>
        <div className="min-w-0 flex-1">{card}</div>
      </div>

      {/* ── Desktop layout (alternating columns) ────────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_48px_1fr] xl:grid-cols-[1fr_64px_1fr] lg:items-start">
        {/* Left column */}
        <div className="pr-6 xl:pr-10">{isEven && card}</div>
        {/* Center: dot */}
        <div className="flex justify-center pt-5 xl:pt-6">{dot}</div>
        {/* Right column */}
        <div className="pl-6 xl:pl-10">{!isEven && card}</div>
      </div>
    </div>
  );
};

const Career = () => {
  const [t] = useTranslation("global", { keyPrefix: "career" });

  return (
    <section
      id="career"
      className="bg-primary-500 flex flex-col items-center gap-14 xl:gap-20 px-5 py-20 lg:px-10 xl:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-white"
      >
        {t("title")}
      </motion.h2>

      {/* Timeline wrapper with vertical line */}
      <div className="relative w-full max-w-4xl xl:max-w-6xl">
        {/* Vertical line — left-aligned on mobile, centered on desktop */}
        <div className="absolute inset-y-0 left-[6px] w-0.5 bg-gradient-to-b from-secondary-400/80 via-secondary-600/50 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

        <div className="flex flex-col gap-10 xl:gap-14">
          <TimelineItem
            index={0}
            isCurrent
            date={t("layer2-date")}
            heading={
              <>
                {t("layer2-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.layer2.de/"
                  className="text-secondary-400 transition-colors hover:text-secondary-200"
                >
                  layer2 collaboration works
                  <img
                    src="https://www.layer2.de/favicon.ico"
                    className="ml-1.5 inline-block h-4 xl:h-5 align-middle opacity-80"
                    alt=""
                  />
                </a>
              </>
            }
          >
            <p>{t("layer2-description-1")}</p>
            <p className="mt-2 text-white/70">{t("layer2-description-2")}</p>
          </TimelineItem>

          <TimelineItem
            index={1}
            date={t("pit_2024-date")}
            heading={
              <>
                {t("pit_2024-title")}{" "}
                <a
                  target="_blank"
                  href="https://paderborn-ist-informatik.de/"
                  className="text-secondary-400 transition-colors hover:text-secondary-200"
                >
                  PIT
                  <img
                    src="https://paderborn-ist-informatik.de/wp-content/uploads/2017/01/favicon.png"
                    className="ml-1.5 inline-block h-4 xl:h-5 align-middle opacity-80"
                    alt=""
                  />
                </a>
              </>
            }
          >
            <p>{t("pit_2024-description-1")}</p>
            <p className="mt-2">{t("pit_2024-description-2")}</p>
          </TimelineItem>

          <TimelineItem
            index={2}
            date={t("hoermann-date")}
            heading={
              <>
                {t("hoermann-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.hoermann.de/"
                  className="text-secondary-400 transition-colors hover:text-secondary-200"
                >
                  Hörmann
                  <img
                    src="https://www.hoermann.de/favicon.ico"
                    className="ml-1.5 inline-block h-4 xl:h-5 align-middle opacity-80"
                    alt=""
                  />
                </a>
              </>
            }
          >
            <p>{t("hoermann-description-1")}</p>
            <p className="mt-2">{t("hoermann-description-2")}</p>
          </TimelineItem>

          <TimelineItem
            index={3}
            date={t("bib-date")}
            heading={
              <>
                {t("bib-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.bib.de/"
                  className="text-secondary-400 transition-colors hover:text-secondary-200"
                >
                  bib International College
                  <img
                    src="https://icons.duckduckgo.com/ip3/www.bib.de.ico"
                    className="ml-1.5 inline-block h-4 xl:h-5 align-middle opacity-80"
                    alt=""
                  />
                </a>
              </>
            }
          >
            <p>{t("bib-description-1")}</p>
            <p className="mt-2 text-white/70">{t("bib-description-2")}</p>
          </TimelineItem>

          <TimelineItem
            index={4}
            date={t("mehrwerk-date")}
            heading={
              <>
                {t("mehrwerk-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.mehrwerk.com/en/"
                  className="text-secondary-400 transition-colors hover:text-secondary-200"
                >
                  Mehrwerk
                  <img
                    src="https://www.mehrwerk.com/favicon.ico"
                    className="ml-1.5 inline-block h-4 xl:h-5 align-middle opacity-80"
                    alt=""
                  />
                </a>
              </>
            }
          >
            <p>{t("mehrwerk-description")}</p>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
};

export default Career;
