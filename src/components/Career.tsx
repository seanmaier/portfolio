import { useTranslation } from "react-i18next";

const Career = () => {
  const [t] = useTranslation("global");

  return (
    <div className="main bg-primary-500">
      <h1
        id="work"
        className="font-jetbrains relative mb-13 text-4xl text-[clamp(2.5rem,5vw,4rem)] font-bold text-white italic before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:content-['']"
      >
        {t("career.title")}
      </h1>
      <div className="main container">
        <ul>
          <li>
            <h2 className="text-2xl font-bold">
              {t("career.mehrwerk-title")}{" "}
              <a
                target="_blank"
                href="https://www.mehrwerk.com/en/"
                className="hover:text-mehrwerkblue group text-mehrwerkblue relative transition-colors duration-200 md:text-white"
              >
                Mehrwerk
                <img
                  src="https://www.mehrwerk.com/favicon.ico"
                  className="ml-2 inline-block h-5 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
                  alt="Mehrwerk logo"
                />
              </a>
            </h2>
            <span className="date">{t("career.mehrwerk-date")}</span>
            <span className="circle"></span>
            <p className="text-md">{t("career.mehrwerk-description")}</p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              {t("career.staatsanwaltschaft-title")}{" "}
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
            <span className="date">{t("career.staatsanwaltschaft-date")}</span>
            <span className="circle"></span>
            <p className="text-md">
              {t("career.staatsanwaltschaft-description")}
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              {t("career.pit_2024-title")}{" "}
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
            <span className="date">{t("career.pit_2024-date")}</span>
            <span className="circle"></span>
            <p className="text-md">{t("career.pit_2024-description")}</p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              {t("career.bib-title")}{" "}
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
            <span className="date">{t("career.bib-date")}</span>
            <span className="circle"></span>
            <p className="text-md">{t("career.bib-description")}</p>
          </li>
          <li>
            <h2 className="text-2xl font-bold">
              {t("career.hoermann-title")}{" "}
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
            <span className="date">{t("career.hoermann-date")}</span>
            <span className="circle"></span>
            <p className="text-md">{t("career.hoermann-description")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
