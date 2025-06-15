import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

export interface SelectOption {
  value: string;
  label: string;
  icon?: ReactNode; // TODO Optional icon for the option
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  loading?: boolean;
}

export const Select = ({
  options,
  value,
  onChange,
  fullWidth = false,
  size = "md",
  rounded = "sm",
  loading = false,
  placeholder = "Select an option",
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const baseClasses =
    "font-medium focus:outline-none md:min-w-30 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-white";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Rounded classes
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Full width class
  const fullWidthClass = fullWidth ? "w-full" : "";

  // Loading state
  const loadingClass = loading ? "opacity-75 cursor-wait" : "";

  // Merge all classes
  const mergedClasses = twMerge(
    baseClasses,
    roundedClasses[rounded],
    fullWidthClass,
    loadingClass,
    className,
  );

  return (
    <div className={`relative bg-black ${mergedClasses}`} ref={selectRef}>
      <motion.button
        type="button"
        className={`flex w-full cursor-pointer items-center justify-between gap-2 ${sizeClasses[size]}`}
        onClick={toggleDropdown}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        initial={false}
      >
        {selectedOption?.icon && (
          <span className="mr-2">{selectedOption.icon}</span>
        )}

        <span className={!selectedOption ? "text-white" : "hidden md:flex"}>
          {selectedOption?.label || placeholder}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              height: "auto",
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              scale: 0.95,
              transition: {
                duration: 0.2,
              },
            }}
            style={{ transformOrigin: "center" }}
            className="absolute right-0 z-10 mt-2 max-h-50 w-[200%] rounded-md bg-black shadow-lg focus:outline-none md:left-0 md:w-[100%]"
          >
            {options.map((option) => (
              <motion.li
                key={option.value}
                className={`cursor-pointer px-3 py-2 hover:bg-gray-700 ${
                  option.value === value ? "text- bg-blue-900" : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
