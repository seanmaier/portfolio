import { useTranslation } from "react-i18next";
import jsAdv from "../assets/js-advanced.png";
import jsFun from "../assets/js-fundamentals.png";
import reactBegin from "../assets/react-beginners.png";
import reactInter from "../assets/react-intermediate.png";
import tsUlt from "../assets/ts-ultimate.png";
import InfiniteScroll, { type Certificate } from "./InfiniteScroll";

const images: Certificate[] = [
  {
    image: jsFun,
    href: "https://codewithmosh.com/p/javascript-basics-for-beginners",
  },
  {
    image: jsAdv,
    href: "https://codewithmosh.com/p/object-oriented-programming-in-javascript",
  },
  {
    image: tsUlt,
    href: "https://codewithmosh.com/p/the-ultimate-typescript",
  },
  {
    image: reactBegin,
    href: "https://codewithmosh.com/p/ultimate-react-part1",
  },
  {
    image: reactInter,
    href: "https://codewithmosh.com/p/ultimate-react-part2",
  },
];

const Certificates = () => {
  const [t] = useTranslation("global", { keyPrefix: "certificates" });

  return (
    <div className="bg-primary-500 relative flex flex-col items-center gap-20 overflow-hidden py-14 text-white">
      <h2 className="text-5xl md:text-8xl">{t("title")}</h2>
      <div className="h-[20rem] md:h-[30rem] lg:h-[40rem]">
        <InfiniteScroll images={images} />
      </div>
    </div>
  );
};

export default Certificates;
