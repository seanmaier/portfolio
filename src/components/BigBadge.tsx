import React, { type ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: ReactNode;
  compact?: boolean;
}

const BigBadge = ({
  title,
  className = "",
  id,
  icon,
  compact,
  ...rest
}: Props) => {
  return (
    <div
      className={`font-jetbrains flex items-center justify-center gap-2 px-3 text-lg text-gray-500 opacity-90 ${compact && "bg-tertiary-500 rounded-2xl py-2 outline-2"} ${className}`}
      {...rest}
    >
      {icon && <span className="ml-2 text-2xl">{icon}</span>}
      <span className="text-xl">{title}</span>
    </div>
  );
};

export default BigBadge;
