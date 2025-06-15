import { motion, useAnimate } from "motion/react";
import { useTranslation } from "react-i18next";
import me from "../assets/IMG_2285.jpeg";
import { useEffect } from "react";

const Hero = () => {
  const [t] = useTranslation("global", { keyPrefix: "hero" });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { x: [0, 15, 0], y: [0, -15, 0] },
      {
        duration: 4,
        delay: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    );
  }, [animate, scope]);

  return (
    <div id="hero" className="bg-primary-500 flex-col pb-30">
      <div className="flex flex-col items-center justify-center p-5 pb-0 md:flex-row md:gap-8 md:p-20 lg:justify-between">
        <div className="relative flex flex-1 items-center justify-center md:basis-[60%] lg:basis-0">
          <motion.span
            initial={{ rotateX: 15, rotateY: 15, x: -15, y: 15 }}
            className="absolute z-0 aspect-square h-full rounded-2xl bg-black opacity-80"
          />
          <motion.img
            initial={{ rotateX: 15, rotateY: 15 }}
            ref={scope}
            className="relative z-10 h-auto max-w-full rounded-2xl text-white md:max-w-xl"
            src={me}
            alt={t("Picture of me")}
          />
        </div>
        <div className="relative flex flex-1 items-center justify-center md:gap-8">
          <p className="font-birthstone absolute z-30 h-20 -translate-y-40 text-8xl text-white md:right-0 md:-translate-x-10 md:text-[150px] lg:-translate-y-70 lg:text-[200px] xl:text-[250px]">
            {t("title")}
          </p>
          <p className="font-birthstone absolute z-30 h-20 -translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:2px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:-translate-x-10 md:-translate-y-15 md:text-[150px] lg:-translate-y-40 lg:text-[200px] xl:text-[250px]">
            {t("title")}
          </p>
          <p className="font-birthstone absolute z-30 h-20 -translate-y-0 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:2px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:-translate-x-10 md:translate-y-15 md:text-[150px] lg:-translate-y-10 lg:text-[200px] xl:text-[250px]">
            {t("title")}
          </p>
          <p className="font-birthstone absolute z-30 h-20 translate-y-20 text-8xl text-transparent drop-shadow-sm [-webkit-text-stroke:2px_#f9b21d] [text-stroke:2px_#f9b21d] md:right-0 md:-translate-x-10 md:translate-y-45 md:text-[150px] lg:translate-y-20 lg:text-[200px] xl:text-[250px]">
            {t("title")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
