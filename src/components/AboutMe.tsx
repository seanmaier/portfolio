import Button from "./button/Button";
import resumePicture from "../assets/IMG_90951.png";
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const AboutMe = () => {
  const [t] = useTranslation("global", { keyPrefix: "about" });

  return (
    <div
      id="about"
      className="bg-creme flex w-screen flex-col items-center justify-center gap-10 p-5 py-30 md:justify-evenly md:px-30 lg:flex-row"
    >
      <div className="flex max-w-lg flex-col gap-8 p-5">
        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold italic">
          {t("title")}
        </h2>
        <p className="text-[clamp(10px,20px,40px)] md:max-w-md">
          {t("description")}
        </p>
        <Button
          variant="tertiary"
          size="lg"
          iconPosition="left"
          icon={<CiLinkedin className="" />}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/maiersean/")
          }
        >
          linkedin.com/in/maiersean
        </Button>
      </div>

      <div className="max-w-sm md:max-w-md xl:max-w-lg">
        <div className="relative">
          <img
            src={resumePicture}
            alt="Resume Icon"
            className="relative z-20"
          />
          <span className="before:bg-primary-500 absolute inset-0 before:absolute before:inset-0 before:top-[35%] before:content-['']"></span>
          <span className="before:bg-creme absolute inset-0 before:absolute before:inset-[25%] before:top-[40%] before:h-[60%] before:w-[60%] before:rounded-full before:content-['']"></span>
        </div>
        <div className="flex flex-col gap-1 bg-black p-5">
          <h6 className="font-jetbrains text-4xl text-white italic">
            {t("contact")}
          </h6>
          <Button
            className="w-fit"
            iconPosition="left"
            variant="text"
            icon={<FaGithub />}
            onClick={() =>
              window.open("https://github.com/seanmaier", "_blank")
            }
          >
            <span className="font-jetbrains text-white">@seanmaier</span>
          </Button>
          <Button
            className="w-fit"
            iconPosition="left"
            variant="text"
            icon={<IoMailOutline />}
            onClick={() =>
              (window.location.href = "mailto:sean.maier@outlook.com")
            }
          >
            <span className="font-jetbrains text-white">
              sean.maier@outlook.de
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
