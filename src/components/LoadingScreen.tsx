// LoadingScreen.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingScreen = ({ isLoading, setIsLoading }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Staggered, quick loading effect
    const steps = [20, 30, 50, 70, 100];
    let idx = 0;

    const loadInterval = setInterval(() => {
      setProgress(steps[idx]);
      idx++;
      if (idx >= steps.length) {
        clearInterval(loadInterval);
        setTimeout(() => setIsLoading(false), 300); // quick finish
      }
    }, 320); // quick stagger

    return () => clearInterval(loadInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          {/* Center reveal effect */}
          <motion.div
            className="bg-tertiary-300 absolute inset-0 top-0 left-0 w-1/2"
            animate={{ x: "0%" }}
            exit={{
              x: "-100%",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="bg-tertiary-300 absolute inset-0 top-0 right-0 z-100 w-1/2"
            initial={{ x: "100%" }}
            animate={{ x: "100%" }}
            exit={{
              x: "200%",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="bg-secondary-200 absolute z-100 h-full w-1"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: progress / 100 }}
            exit={{ scaleY: 0, transition: { duration: 0 } }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
