import {
  MotionValue,
  motion,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const fontSize = 20;
const padding = 0;
const height = fontSize + padding;

interface CounterProps {
  value: number;
}

interface NumberProps {
  mv: MotionValue;
  number: number;
}

const Counter = ({ value }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });

  return (
    <div ref={ref} style={{ fontSize }} className="flex overflow-hidden">
      {value >= 100 && <Digit place={100} value={isInView ? value : 0} />}
      {value >= 10 && <Digit place={10} value={isInView ? value : 0} />}
      {<Digit place={1} value={isInView ? value : 0} />}
    </div>
  );
};

function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

const Number = ({ mv, number }: NumberProps) => {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
};

export default Counter;
