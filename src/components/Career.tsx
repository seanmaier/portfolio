import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

const Career = () => {
  const [t] = useTranslation("global", { keyPrefix: "career" });

  return (
    <div id="career" className="main bg-primary-500">
      <Reveal>
        <h1 className="font-jetbrains relative mb-13 text-[clamp(3rem,8vw,6rem)] font-bold text-white italic before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:content-['']">
          {t("title")}
        </h1>
      </Reveal>
      <div className="main container">
        <ul>
          <li>
            <Reveal>
              <h2 className="px-3 text-2xl font-bold">
                {t("mehrwerk-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.mehrwerk.com/en/"
                  className="hover:text-mehrwerkblue group text-mehrwerkblue relative transition-colors duration-200 md:text-white"
                >
                  <span className="inline-block">
                    Mehrwerk
                    <img
                      src="https://www.mehrwerk.com/favicon.ico"
                      className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                      alt="Mehrwerk logo"
                    />
                  </span>
                </a>
              </h2>
            </Reveal>
            <span className="date">
              <Reveal>{t("mehrwerk-date")}</Reveal>
            </span>
            <span className="circle"></span>

            <p className="text-md">{t("mehrwerk-description")}</p>
          </li>
          <li>
            <Reveal>
              <h2 className="px-3 text-2xl font-bold">
                {t("staatsanwaltschaft-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.sta-bielefeld.nrw.de/"
                  className="hover:text-staatsanwaltsblau group text-staatsanwaltsblau relative transition-colors duration-200 md:text-white"
                >
                  Staatsanwaltschaft Bielefeld
                  <img
                    src="https://www.sta-bielefeld.nrw.de/favicon.ico"
                    className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="Staatsanwaltschaft Bielefeld logo"
                  />
                </a>
              </h2>
            </Reveal>
            <span className="date">
              <Reveal>{t("staatsanwaltschaft-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <p className="text-md">
              <Reveal>{t("staatsanwaltschaft-description")}</Reveal>
            </p>
          </li>
          <li>
            <Reveal>
              <h2 className="px-3 text-2xl font-bold">
                {t("pit_2024-title")}{" "}
                <a
                  target="_blank"
                  href="https://paderborn-ist-informatik.de/"
                  className="hover:text-pitred group text-pitred relative transition-colors duration-200 md:text-white"
                >
                  PIT
                  <img
                    src="https://paderborn-ist-informatik.de/wp-content/uploads/2017/01/favicon.png"
                    className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="PIT logo"
                  />
                </a>
              </h2>
            </Reveal>
            <span className="date">
              <Reveal>{t("pit_2024-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <p className="text-md">
              <Reveal>{t("pit_2024-description-1")}</Reveal>
              <br />
              <br />
              <Reveal>{t("pit_2024-description-2")}</Reveal>
            </p>
          </li>
          <li>
            <Reveal>
              <h2 className="px-3 text-2xl font-bold">
                {t("bib-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.bib.de/"
                  className="hover:text-bib group bib relative transition-colors duration-200 md:text-white"
                >
                  bib Internation College
                  <img
                    src="https://icons.duckduckgo.com/ip3/www.bib.de.ico"
                    className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="bib logo"
                  />
                </a>
              </h2>
            </Reveal>
            <span className="date">
              <Reveal>{t("bib-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <p className="text-md">
              <Reveal>{t("bib-description-1")}</Reveal>
              <br />
              <br />
              <Reveal>{t("bib-description-2")}</Reveal>
            </p>
          </li>
          <li>
            <Reveal>
              <h2 className="px-3 text-2xl font-bold">
                {t("hoermann-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.hoermann.de/"
                  className="hover:text-hoermannblue group text-hoermannblue relative transition-colors duration-200 md:text-white"
                >
                  Hörmann
                  <img
                    src="https://www.hoermann.de/favicon.ico"
                    className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="Hoermann logo"
                  />
                </a>
              </h2>
            </Reveal>
            <span className="date">
              <Reveal>{t("hoermann-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <p className="text-md">
              <Reveal>{t("hoermann-description-1")}</Reveal>
              <br />
              <br />
              <Reveal>{t("hoermann-description-2")}</Reveal>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
