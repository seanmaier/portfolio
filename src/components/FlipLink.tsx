import { motion } from "framer-motion";

interface Props {
  children: string;
  onClick: () => void;
}
const DURATION = 0.5;
const STAGGER = 0.05;

const FlipLink = ({ children, onClick }: Props) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      onClick={onClick}
      className="relative block overflow-hidden font-black whitespace-nowrap uppercase"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
