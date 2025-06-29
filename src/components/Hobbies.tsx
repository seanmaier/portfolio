//@ts-nocheck
import { useState } from "react";
import cinematography from "../assets/IMG_1868.JPEG";
import travelling from "../assets/IMG_3134.JPEG";
import hiking from "../assets/IMG_2647.JPEG";
import piano from "../assets/piano.jpg";
import ImageAccordian, { type Item } from "./ImageAccordian";
import ProgressBar from "./ProgessBar";
import { useTranslation } from "react-i18next";

const Hobbies = () => {
  const [t] = useTranslation("global", { keyPrefix: "hobbies" });

  const items: Item[] = [
    {
      title: t("travel-title"),
      description: t("travel-description"),
      url: travelling,
    },
    {
      title: t("music-title"),
      description: t("music-description"),
      url: piano,
    },
    {
      title: t("cinema-title"),
      description: t("cinema-description"),
      url: cinematography,
    },
    {
      title: t("hike-title"),
      description: t("hike-description"),
      url: hiking,
    },
  ];

  return (
    <section
      id="hobbies"
      className="bg-creme flex flex-col items-center justify-center gap-20 py-20 md:px-20 lg:px-40 xl:px-80 2xl:px-[30%]"
    >
      <h2 className="text-center xl:text-8xl">{t("title")}</h2>

      <div
        id="languages"
        className="p flex w-full flex-col items-center justify-center gap-10"
      >
        <h3>{t("subtitle1")}</h3>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-2xl font-bold">{t("german")}</p>
            <p className="font-semibold text-gray-500">{t("langLevel1")}</p>

            <ProgressBar progress={100} />
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <p className="text-2xl font-bold">{t("english")}</p>
            <p className="font-semibold text-gray-500">{t("langLevel2")}</p>
            <ProgressBar progress={95} />
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <p className="text-2xl font-bold">{t("swedish")}</p>
            <p className="font-semibold text-gray-500">{t("langLevel3")}</p>
            <ProgressBar progress={10} />
          </div>
        </div>
      </div>

      <div className="w-full px-5">
        <h3 className="text-center">{t("subtitle2")}</h3>
        <ImageAccordian items={items} />
      </div>
    </section>
  );
};

export default Hobbies;
