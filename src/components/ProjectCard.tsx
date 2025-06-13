import { useTranslation } from "react-i18next";
import Button from "./button/Button";

interface Props {
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  link?: string;
}

export const ProjectCard = ({ children, title, disabled, link }: Props) => {
  const [t] = useTranslation("global", { keyPrefix: "projects" });

  return (
    <div className="from-tertiary-300 to-secondary-500 lg:max-w-1xl flex max-w-md flex-col gap-5 rounded-2xl bg-gradient-to-br p-10 shadow-md shadow-black">
      <h2 className="font-jetbrains text-center text-4xl font-bold text-white">
        {title}
      </h2>
      {children}
      <div className="mt-auto">
        <Button
          onClick={() => window.open(link, "_blank")}
          fullWidth
          disabled={disabled}
          variant="tertiary"
        >
          {disabled ? t("not-published") : t("check-out")}
        </Button>
      </div>
    </div>
  );
};
