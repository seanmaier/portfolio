//@ts-nocheck
import { useState } from "react";
import cinematography from "../assets/IMG_1868.JPEG";
import travelling from "../assets/IMG_3134.JPEG";
import hiking from "../assets/IMG_2647.JPEG";
import piano from "../assets/piano.jpg";
import ImageAccordian, { type Item } from "./ImageAccordian";
import ProgressBar from "./ProgessBar";

const items: Item[] = [
  {
    title: "Travelling",
    description:
      "I love to explore new places and cultures, capturing memories along the way.",
    url: travelling,
  },
  {
    title: "Music",
    description:
      "I play the piano for fun and relaxation, to calm down after a long day.",
    url: piano,
  },
  {
    title: "Cinematography",
    description:
      "I enjoy creating videos and capturing moments through the lens of a camera.",
    url: cinematography,
  },
  {
    title: "Hiking",
    description:
      "Seeing the world from above is one of my favorite things to do.",
    url: hiking,
  },
];

const Hobbies = () => {
  return (
    <div
      id="hobbies"
      className="bg-creme flex flex-col items-center justify-center gap-20 py-20 md:px-20 lg:px-40 xl:px-80 2xl:px-[30%]"
    >
      <h2 className="text-center xl:text-8xl">More about me</h2>

      <div
        id="languages"
        className="p flex w-full flex-col items-center justify-center gap-10"
      >
        <h3>The languages I speak:</h3>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-2xl font-bold">German</p>
            <p className="font-semibold text-gray-500">Mouther tongue</p>

            <ProgressBar progress={100} />
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <p className="text-2xl font-bold">English</p>
            <p className="font-semibold text-gray-500">Fluent</p>
            <ProgressBar progress={95} />
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <p className="text-2xl font-bold">Swedish</p>
            <p className="font-semibold text-gray-500">Beginner</p>
            <ProgressBar progress={10} />
          </div>
        </div>
      </div>

      <div className="w-full px-5">
        <h3 className="text-center">Hobbies</h3>
        <ImageAccordian items={items} />
      </div>
    </div>
  );
};

export default Hobbies;
