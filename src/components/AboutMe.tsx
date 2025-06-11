import Button from "./button/Button";
import resumePicture from "../assets/IMG_90951.png";
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-creme w-screen items-center justify-center p-15 lg:flex-col">
      <div className="mb-8 flex flex-col gap-4">
        <h2
          id="resume"
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold italic"
        >
          {t("about.title")}
        </h2>
        <p>{t("about.description")}</p>
        <Button
          variant="tertiary"
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/maiersean/")
          }
        >
          linkedin.com/in/maiersean
        </Button>
      </div>
      <div className="max-w-sm lg:w-1/2">
        <div className="relative">
          <img
            src={resumePicture}
            alt="Resume Icon"
            className="relative z-20"
          />
          <span className="before:bg-primary-500 absolute inset-0 before:absolute before:inset-0 before:top-[35%] before:content-['']"></span>
          <span className="before:bg-creme absolute inset-0 before:absolute before:inset-[25%] before:top-[40%] before:h-[60%] before:w-[60%] before:rounded-full before:content-['']"></span>
        </div>
        <div className="bg-black p-5">
          <h6 className="font-jetbrains mb-3 text-3xl text-white italic">
            {t("about.contact")}
          </h6>
          <div
            onClick={() =>
              (window.location.href = "mailto:sean.maier@outlook.com")
            }
            className="hover:bg-primary-500 flex cursor-pointer items-center gap-3 rounded-2xl p-2 transition-colors duration-300"
          >
            <IoMailOutline className="text-2xl font-bold text-white" />
            <p className="font-jetbrains text-white">sean.maier@outlook.de</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
