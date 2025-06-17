import Button from "./button/Button";
import { FaArrowUp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global", { keyPrefix: "footer" });

  return (
    <footer>
      <div className="bg-primary-900 text- flex flex-col gap-15 px-10 py-20 md:px-30">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} - {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white">{t("back-to-top")}</p>
            <Button
              variant="ghost"
              rounded="full"
              icon={<FaArrowUp />}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm"
            ></Button>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-white">{t("question")}</p>
          <p className="text-[60px] leading-none text-gray-200 md:text-[150px]">
            {t("talk")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Button
              size="lg"
              variant="ghost"
              icon={<FaGithub />}
              onClick={() =>
                window.open("https://github.com/seanmaier", "_blank")
              }
            >
              Github
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() =>
                window.open("https://www.linkedin.com/in/maiersean", "_blank")
              }
              icon={<CiLinkedin />}
            >
              LinkedIn
            </Button>
            <Button
              icon={<IoMailOutline />}
              size="lg"
              variant="ghost"
              onClick={() =>
                (window.location.href = "mailto:sean.maier@outlook.com")
              }
            >
              E-Mail
            </Button>
          </div>
          <p className="text-white">
            {t("made-with")} ❤️ {t("by")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
