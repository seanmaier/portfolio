import { useTranslation } from "react-i18next";
import me from "../assets/IMG_2285.jpeg";

const Hero = () => {
  const [t] = useTranslation("global");

  return (
    <div id="about-me" className="bg-primary-500 w-screen flex-col">
      <div className="align-center flex flex-col items-center justify-center p-8 pb-0 md:hidden">
        <img
          className="h-auto rounded-2xl text-white"
          src={me}
          alt={t("hero.alt")}
        />
        <p className="font-birthstone h-20 -translate-y-40 text-8xl text-white">
          {t("hero.title")}
        </p>
        {Array.from({ length: 3 }).map((_, i) => (
          <p
            className="font-birthstone h-20 -translate-y-40 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d]"
            key={i}
          >
            {t("hero.title")}
          </p>
        ))}
      </div>

      <div className="bg-primary-900 flex w-screen flex-col items-center justify-center gap-10 p-10 pb-0">
        <p className="font-jetbrains absolute w-100 -translate-y-20 text-center text-white">
          {t("hero.description")}
        </p>
        <div className="bg-secondary-500 flex h-20 w-20 translate-y-10 animate-bounce items-center justify-center rounded-full">
          <span className="text-xs font-bold">{t("hero.scrollDown")}</span>
        </div>
      </div>

      <div className="hidden">
        <div className="flex flex-col items-center justify-center gap-10">
          <img className="h-80 rounded-2xl" src="./src/assets/IMG_2285.JPEG" />
          <p className="max-w-lg text-center text-white">
            Focussed on learning new things and Exploring the world of software
            architecture. Always in for a new challenge
          </p>
        </div>
        <div>
          <p className="font-birthstone text-8xl text-white">Portfolio</p>
          {Array.from({ length: 3 }).map((_, i) => (
            <p
              className="font-birthstone text-primary-500 drop-shadow-secondary-500 text-8xl drop-shadow-sm"
              key={i}
            >
              Portfolio
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
