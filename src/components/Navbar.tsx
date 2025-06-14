import Button from "./button/Button";
import { useTranslation } from "react-i18next";
import { Select, type SelectOption } from "./Select";

const options: SelectOption[] = [
  { value: "en", label: "English", icon: "🇺🇲" },
  { value: "de", label: "Deutsch", icon: "🇩🇪" },
  { value: "sv", label: "Svenska", icon: "🇸🇪" },
];

const Navbar = () => {
  const [t, i18n] = useTranslation("global", { keyPrefix: "navbar" });

  const changeLanguage = (e: string) => {
    i18n.changeLanguage(e);
  };

  return (
    <div className="bg-primary-500 sticky top-0 z-100 flex h-16 items-center justify-between px-5 md:px-20">
      <div className="relative flex items-center gap-3">
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <span className="text-white before:absolute before:left-0 before:h-[1px] before:w-[120%] before:-translate-y-0.5 before:bg-white before:content-['']">
            Sean Maier
          </span>
        </a>
      </div>
      <div className="flex gap-5">
        <div className="hidden gap-3 lg:flex">
          <Button
            scale={1.2}
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("about")}
          </Button>
          <Button
            scale={1.2}
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("career")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("career")}
          </Button>
          <Button
            scale={1.2}
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("experience")}
          </Button>
          <Button
            scale={1.2}
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("projects")}
          </Button>
          <Button
            scale={1.2}
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
          scale={1.2}
          size="sm"
          className="ml-2"
          onClick={() =>
            (window.location.href = "mailto:sean.maier@outlook.com")
          }
        >
          {t("contact")}
        </Button>
        <Select
          className="bg-primary-600"
          placeholder="Select Language"
          onChange={(lang) => changeLanguage(lang)}
          size="sm"
          options={options}
          value={i18n.language}
        />
      </div>
    </div>
  );
};

export default Navbar;
