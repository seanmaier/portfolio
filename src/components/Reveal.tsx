import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  slideOff?: boolean;
}

const Reveal = ({ children, slideOff }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {!slideOff && (
        <motion.div
          className="bg-primary-300 absolute top-4 right-0 bottom-4 left-0 z-40"
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
        />
      )}
    </div>
  );
};

export default Reveal;
