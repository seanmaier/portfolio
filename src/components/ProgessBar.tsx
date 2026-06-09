import { motion, useSpring, useInView, useTransform } from "motion/react";
import Counter from "./Counter";
import { useEffect, useRef, useState } from "react";

interface Props {
  progress?: number;
}

const ProgressBar = ({ progress = 10 }: Props) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(0, { duration: 3000, bounce: 0 });
  const widthPct = useTransform(spring, (v) => `${v}%`);

  useEffect(() => {
    return spring.on("change", (value) => setDisplay(value));
  }, [spring]);

  useEffect(() => {
    if (isInView) {
      spring.set(progress);
    }
  }, [isInView, progress, spring]);

  const progressColour =
    progress < 50
      ? "text-red-600"
      : progress < 80
        ? "text-yellow-600"
        : "text-green-600";

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-2">
      <div className="h-2.5 w-50 rounded-full dark:bg-gray-700">
        <motion.div
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: widthPct }}
        />
      </div>
      <div className={`flex font-bold ${progressColour}`}>
        <Counter value={display} />%
      </div>
    </div>
  );
};

export default ProgressBar;
