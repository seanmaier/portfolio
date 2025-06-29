import Button from "./button/Button";
import resumePicture from "../assets/profile.png";
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import { motion } from "motion/react";

const AboutMe = () => {
  const [t] = useTranslation("global", { keyPrefix: "about" });

  return (
    <section
      id="about"
      className="bg-creme flex w-screen flex-col items-center justify-center gap-10 p-5 pb-10 md:justify-evenly md:px-30 lg:flex-row"
    >
      <section className="flex max-w-lg flex-col gap-8 p-5">
        <Reveal>
          <h2 className="font-sans">{t("title")}</h2>
        </Reveal>
        <div className="text-[clamp(10px,20px,40px)] md:max-w-md">
          <Reveal>{t("description-1")}</Reveal>
          <br />
          <Reveal>{t("description-2")}</Reveal>
        </div>
        <Button
          variant="dotted"
          size="lg"
          iconPosition="left"
          icon={<CiLinkedin className="" />}
          onClick={() =>
            window.open("https://www.linkedin.com/in/maiersean/", "_blank")
          }
        >
          <Reveal>linkedin.com/in/maiersean</Reveal>
        </Button>
      </section>

      <motion.div
        whileHover={{ scale: 1.03, rotate: -2 }}
        className="max-w-sm md:max-w-md xl:max-w-lg"
      >
        <div className="relative">
          <img
            src={resumePicture}
            alt="Resume Icon"
            className="relative z-30"
          />
          <span className="before:bg-primary-500 absolute inset-0 before:absolute before:inset-0 before:top-[35%] before:z-1 before:content-['']"></span>
          <span className="before:bg-creme absolute inset-0 before:absolute before:inset-[25%] before:top-[40%] before:z-1 before:h-[60%] before:w-[60%] before:rounded-full before:content-['']"></span>
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
            <span className="font-jetbrains text-white">
              <Reveal>@seanmaier</Reveal>
            </span>
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
            <Reveal>
              <span className="font-jetbrains text-white">
                sean.maier@outlook.de
              </span>
            </Reveal>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
export default AboutMe;
