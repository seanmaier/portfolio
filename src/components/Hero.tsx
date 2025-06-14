import { useTranslation } from "react-i18next";
import me from "../assets/IMG_2285.jpeg";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [t] = useTranslation("global", { keyPrefix: "hero" });

  return (
    <>
      <div id="hero" className="bg-primary-500 w-screen flex-col pb-50">
        <div className="flex flex-col items-center justify-center p-5 pb-0 md:flex-row md:gap-8 md:p-20 lg:justify-between">
          <div className="flex flex-1 items-center justify-center md:basis-[60%] lg:basis-0">
            <img
              className="h-auto max-w-full rounded-2xl text-white lg:max-w-3xl"
              src={me}
              alt={t("Picture of me")}
            />
          </div>
          <div className="relative flex flex-1 items-center justify-center md:gap-8">
            <p className="font-birthstone absolute h-20 -translate-y-40 text-8xl text-white md:right-0 md:-translate-x-10 md:text-[150px] lg:-translate-y-70 lg:text-[200px] xl:text-[250px]">
              {t("title")}
            </p>
            <p className="font-birthstone absolute h-20 -translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:-translate-x-10 md:-translate-y-15 md:text-[150px] lg:-translate-y-40 lg:text-[200px] xl:text-[250px]">
              {t("title")}
            </p>
            <p className="font-birthstone absolute h-20 -translate-y-0 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:-translate-x-10 md:translate-y-15 md:text-[150px] lg:-translate-y-10 lg:text-[200px] xl:text-[250px]">
              {t("title")}
            </p>
            <p className="font-birthstone absolute h-20 translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:-translate-x-10 md:translate-y-20 md:text-[150px] lg:translate-y-20 lg:text-[200px] xl:text-[250px]">
              {t("title")}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-primary-900 relative flex h-90 items-center justify-center px-10">
        <div className="relative hidden flex-1 items-center justify-center md:flex md:gap-8">
          <p className="font-birthstone absolute h-20 -translate-y-40 text-8xl text-white md:right-0 md:translate-x-10 md:text-[150px] lg:-translate-y-50 lg:text-[220px]">
            Resume
          </p>
          <p className="font-birthstone absolute h-20 -translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:translate-x-10 md:-translate-y-15 md:text-[150px] lg:-translate-y-20 lg:text-[220px]">
            Resume
          </p>
          <p className="font-birthstone absolute h-20 -translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:translate-x-10 md:translate-y-10 md:text-[150px] lg:translate-y-10 lg:text-[220px]">
            Resume
          </p>
          <p className="font-birthstone absolute h-20 translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:1px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:translate-x-10 md:translate-y-40 md:text-[150px] lg:translate-y-40 lg:text-[220px]">
            Resume
          </p>
        </div>
        <div className="flex justify-center italic md:basis-[70%]">
          <blockquote className="font-jetbrains max-w-lg text-2xl dark:text-gray-300">
            <svg
              className="mb-4 h-8 w-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            "{t("description")}"
          </blockquote>
        </div>
        <div className="bg-secondary-500 absolute bottom-0 flex h-30 w-30 translate-y-20 animate-bounce flex-col items-center justify-center rounded-full">
          <span className="flex flex-col text-xl font-bold">
            {t("scrollDown")}
          </span>
          <FaArrowDown className="absolute bottom-3 text-3xl" />
        </div>
      </div>
    </>
  );
};

export default Hero;
