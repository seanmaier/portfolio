import Button from "./button/Button";
import { useTranslation } from "react-i18next";
import { type Languages } from "../utils/language";

type LanguageOption = {
  code: Languages;
  label: string;
  flag: string;
};

const languageOptions: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇺🇲" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
];

const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div className="navbar bg-primary-500 sticky top-0 z-100 flex h-16 items-center justify-between px-5 md:px-20">
      <div className="relative flex items-center gap-3">
        <p className="text-white before:absolute before:left-0 before:h-[1px] before:w-[120%] before:-translate-y-0.5 before:bg-white before:content-['']">
          Sean Maier
        </p>
      </div>
      <div className="flex gap-5">
        <div className="hidden gap-3 sm:flex">
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("navbar.about")}
          </Button>
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("resume")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("navbar.resume")}
          </Button>
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("navbar.projects")}
          </Button>
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("hobbies")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hobbies
          </Button>
        </div>
        <Button
          size="sm"
          className="ml-2"
          onClick={() =>
            (window.location.href = "mailto:sean.maier@outlook.com")
          }
        >
          {t("navbar.contact")}
        </Button>
        <select
          onChange={changeLanguage}
          value={i18n.language}
          id="lang-select"
        >
          {languageOptions.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
