import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "danger" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      rounded = "full",
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = "left",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    // Base classes that all buttons share
    const baseClasses =
      "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant classes
    const variantClasses = {
      primary:
        "bg-secondary-500 hover:bg-secondary-900 text-white focus:ring-blue-500",
      secondary:
        "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
      text: "bg-transparent hover:bg-primary-100 hover:text-primary-700 text-gray-200 focus:ring-gray-500",
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
      ghost:
        "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500 border border-gray-300",
      link: "bg-transparent hover:underline text-blue-600 hover:text-blue-800 focus:ring-blue-500 p-0",
    };

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
      variantClasses[variant],
      sizeClasses[size],
      roundedClasses[rounded],
      fullWidthClass,
      loadingClass,
      variant === "link" ? "" : "inline-flex items-center justify-center",
      className,
    );

    return (
      <button
        ref={ref}
        className={mergedClasses}
        disabled={loading || props.disabled}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className={`mr-2 ${loading ? "invisible" : ""}`}>{icon}</span>
        )}
        <span className={loading ? "invisible" : ""}>{children}</span>
        {icon && iconPosition === "right" && (
          <span className={`ml-2 ${loading ? "invisible" : ""}`}>{icon}</span>
        )}
        {loading && (
          <span className="absolute">
            <svg
              className="h-5 w-5 animate-spin text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
      </button>
    );
  },
);

export default Button;
