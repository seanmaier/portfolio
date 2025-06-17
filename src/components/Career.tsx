import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

const Career = () => {
  const [t] = useTranslation("global", { keyPrefix: "career" });

  return (
    <div id="career" className="main bg-primary-500 gap-10">
      <Reveal>
        <h2 className="text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:content-['']">
          {t("title")}
        </h2>
      </Reveal>
      <div className="main container">
        <ul>
          <li>
            <Reveal>
              <h3 className="text-white">
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
                      className="ml-2 inline-block h-7 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                      alt="Mehrwerk logo"
                    />
                  </span>
                </a>
              </h3>
            </Reveal>
            <span className="date">
              <Reveal>{t("mehrwerk-date")}</Reveal>
            </span>
            <span className="circle"></span>

            <div className="text-md text-white">
              <Reveal>{t("mehrwerk-description")}</Reveal>
            </div>
          </li>
          <li>
            <Reveal>
              <h3 className="leading-tight text-white">
                {t("staatsanwaltschaft-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.sta-bielefeld.nrw.de/"
                  className="hover:text-staatsanwaltsblau group text-staatsanwaltsblau relative transition-colors duration-200 md:text-white"
                >
                  Staatsanwaltschaft Bielefeld
                  <img
                    src="https://www.sta-bielefeld.nrw.de/favicon.ico"
                    className="ml-2 inline-block h-7 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="Staatsanwaltschaft Bielefeld logo"
                  />
                </a>
              </h3>
            </Reveal>
            <span className="date">
              <Reveal>{t("staatsanwaltschaft-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <div className="text-md text-white">
              <Reveal>{t("staatsanwaltschaft-description")}</Reveal>
            </div>
          </li>
          <li>
            <Reveal>
              <h3 className="text-white">
                {t("pit_2024-title")}{" "}
                <a
                  target="_blank"
                  href="https://paderborn-ist-informatik.de/"
                  className="hover:text-pitred group text-pitred relative transition-colors duration-200 md:text-white"
                >
                  PIT
                  <img
                    src="https://paderborn-ist-informatik.de/wp-content/uploads/2017/01/favicon.png"
                    className="ml-2 inline-block h-7 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="PIT logo"
                  />
                </a>
              </h3>
            </Reveal>
            <span className="date">
              <Reveal>{t("pit_2024-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <div className="text-md text-white">
              <Reveal>{t("pit_2024-description-1")}</Reveal>
              <br />
              <br />
              <Reveal>{t("pit_2024-description-2")}</Reveal>
            </div>
          </li>
          <li>
            <Reveal>
              <h3 className="leading-tight text-white">
                {t("bib-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.bib.de/"
                  className="hover:text-bib group bib relative transition-colors duration-200 md:text-white"
                >
                  bib Internation College
                  <img
                    src="https://icons.duckduckgo.com/ip3/www.bib.de.ico"
                    className="ml-2 inline-block h-7 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="bib logo"
                  />
                </a>
              </h3>
            </Reveal>
            <span className="date">
              <Reveal>{t("bib-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <div className="text-md text-white">
              <Reveal>{t("bib-description-1")}</Reveal>
              <br />
              <br />
              <Reveal>{t("bib-description-2")}</Reveal>
            </div>
          </li>
          <li>
            <Reveal>
              <h3 className="leading-tight text-white">
                {t("hoermann-title")}{" "}
                <a
                  target="_blank"
                  href="https://www.hoermann.de/"
                  className="hover:text-hoermannblue group text-hoermannblue relative transition-colors duration-200 md:text-white"
                >
                  Hörmann
                  <img
                    src="https://www.hoermann.de/favicon.ico"
                    className="ml-2 inline-block h-7 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                    alt="Hoermann logo"
                  />
                </a>
              </h3>
            </Reveal>
            <span className="date">
              <Reveal>{t("hoermann-date")}</Reveal>
            </span>
            <span className="circle"></span>
            <div className="text-md text-white">
              <Reveal>{t("hoermann-description-1")}</Reveal>
              <br />
              <br />
              <Reveal>{t("hoermann-description-2")}</Reveal>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
