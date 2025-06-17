import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

interface Props {
  image: string;
  href?: string;
}

const Card = ({ image, href }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative flex min-w-[20rem] items-center justify-center overflow-hidden rounded-xl bg-slate-400 md:min-w-[30rem] lg:min-w-[40rem]"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && href && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="pointer-events-none absolute h-full w-full bg-black opacity-50" />
            <motion.a
              href={href}
              target="_blank"
              className="z-10 flex items-center gap-[0.5ch] rounded-full bg-white px-3 py-2 text-sm font-semibold text-black hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>See source</span>
              <FaArrowCircleRight className="h-4 w-4 -rotate-45" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={image} alt={image} style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;
