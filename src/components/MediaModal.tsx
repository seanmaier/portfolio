"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { XIcon } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { desc } from "motion/react-client";

interface IMediaModal {
  imgSrc?: string;
  videoSrc?: string;
  className?: string;
  description?: string;
}
const transition = {
  type: "spring",
  duration: 0.4,
};
export function MediaModal({
  imgSrc,
  videoSrc,
  className,
  description,
}: IMediaModal) {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");
  const uniqueId = useId();

  useEffect(() => {
    if (isMediaModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMediaModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMediaModalOpen]);
  return (
    <>
      <MotionConfig transition={transition}>
        <>
          <motion.div
            // @ts-ignore
            className={`relative flex h-full flex-col overflow-hidden border bg-gray-300 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-950 ${className}`}
            layoutId={`dialog-${uniqueId}`}
            style={{
              borderRadius: "12px",
            }}
            onClick={() => {
              setIsMediaModalOpen(true);
            }}
          >
            {imgSrc && (
              <motion.div
                layoutId={`dialog-img-${uniqueId}`}
                className="h-full w-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
            {videoSrc && (
              <motion.div
                layoutId={`dialog-video-${uniqueId}`}
                className="h-full w-full"
              >
                <video
                  autoPlay
                  muted
                  loop
                  className="h-full w-full rounded-sm object-cover"
                >
                  <source src={videoSrc!} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </motion.div>
        </>
        <AnimatePresence initial={false} mode="sync">
          {isMediaModalOpen && (
            <>
              <motion.div
                key={`backdrop-${uniqueId}`}
                className="fixed inset-0 h-full w-full bg-white/95 backdrop-blur-sm dark:bg-black/25"
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => {
                  setIsMediaModalOpen(false);
                }}
              />
              <motion.div
                key="dialog"
                className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center"
              >
                <motion.div
                  className="pointer-events-auto relative m-10 flex aspect-square flex-col overflow-hidden border bg-gray-200 md:m-[5rem] lg:m-[10rem] xl:m-[20rem] 2xl:m-[50rem] dark:bg-gray-950"
                  layoutId={`dialog-${uniqueId}`}
                  tabIndex={-1}
                  style={{
                    borderRadius: "24px",
                  }}
                >
                  {imgSrc && (
                    <motion.div
                      layoutId={`dialog-img-${uniqueId}`}
                      className="h-full w-full"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  )}
                  {videoSrc && (
                    <motion.div
                      layoutId={`dialog-video-${uniqueId}`}
                      className="h-full w-full"
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        controls
                        className="h-full w-full rounded-sm object-cover"
                      >
                        <source src={videoSrc!} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setIsMediaModalOpen(false)}
                    className="absolute top-6 right-6 cursor-pointer rounded-full bg-gray-400 p-3 text-zinc-50 hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-gray-800"
                    type="button"
                    aria-label="Close dialog"
                  >
                    <XIcon size={24} />
                  </button>
                  {description && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-0 flex h-6/12 w-full items-end justify-center bg-gradient-to-b from-transparent to-black p-3 text-2xl text-white"
                    >
                      <h3>{description}</h3>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}
