import React, { type ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: ReactNode;
  index: number;
}

const BigBadge = ({
  title,
  index,
  className = "",
  id,
  icon,
  ...rest
}: Props) => {
  return (
    <div
      className="bg-tertiary-500 flex h-15 items-center justify-center rounded-2xl px-3 text-white opacity-90 shadow-2xl outline-2 outline-black"
      {...rest}
    >
      <span className="font-jetbrains text-xl">{title}</span>
      {icon && <span className="ml-2 text-2xl">{icon}</span>}
    </div>
  );
};

export default BigBadge;
