import { motion, useSpring } from "motion/react";
import Counter from "./Counter";
import { useEffect, useState } from "react";

interface Props {
  progress?: number;
}

const ProgressBar = ({ progress = 10 }: Props) => {
  const [display, setDisplay] = useState(0);

  const springSubCount = useSpring(0, {
    duration: 7000,
    bounce: 0,
  });

  springSubCount.on("change", (value) => {
    setDisplay(value);
  });

  useEffect(() => {
    springSubCount.set(progress);
  }, [progress, springSubCount]);

  const progressColour =
    progress < 50
      ? "text-red-600"
      : progress < 80
        ? "text-yellow-600"
        : "text-green-600";

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="h-2.5 w-50 rounded-full dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: progress + "%" }}
        />
      </div>
      <div className={`flex font-bold ${progressColour}`}>
        <Counter value={display} />%
      </div>
    </div>
  );
};

export default ProgressBar;
