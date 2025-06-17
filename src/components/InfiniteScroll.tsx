import Card from "./Card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export type Certificate = {
  image: string;
  href?: string;
};

interface Props {
  images: Certificate[];
}

const InfiniteScroll = ({ images }: Props) => {
  let [ref, { width }] = useMeasure();

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;

    let finalPosition = -width / 2 - 8; // Adjust for half the width of the container and some padding

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender); // Trigger a rerender to reset the animation
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <motion.div
      className="absolute left-0 flex gap-4"
      ref={ref}
      style={{ x: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {[...images, ...images].map((img, idx) => (
        <Card image={img.image} key={idx} href={img.href} />
      ))}
    </motion.div>
  );
};

export default InfiniteScroll;
