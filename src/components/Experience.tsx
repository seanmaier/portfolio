import { useTranslation } from "react-i18next";
import BigBadge from "./BigBadge";

const Experience = () => {
  const [t] = useTranslation("global", { keyPrefix: "experience" });

  return (
    <div
      id="experience"
      className="bg-creme it flex w-screen flex-col items-center justify-center gap-10 py-20 lg:px-100"
    >
      <h2 className="mb-10 text-center text-4xl font-bold italic lg:text-5xl">
        {t("title")}
      </h2>
      <h3 className="text-4xl">Frontend</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="HTML" />
        <BigBadge title="CSS" />
        <BigBadge title="JavaScript" />
        <BigBadge title="TypeScript" />
        <BigBadge title="Tailwind" />
        <BigBadge title="React" />
        <BigBadge title="React-Hook-Forms" />
        <BigBadge title="React-Router" />
        <BigBadge title="Zustand" />
        <BigBadge title="Zod" />
      </div>
      <h3 className="text-4xl">Backend</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="C#" />
        <BigBadge title="ASP.NET Core" />
        <BigBadge title="EF Core" />
        <BigBadge title="REST API" />
      </div>
      <h3 className="text-4xl">{t("databases")}</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="PostgreSQL" />
        <BigBadge title="SQLite" />
      </div>
      <h3 className="text-4xl">{t("analytics")}</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="Python" />
        <BigBadge title="Pandas" />
        <BigBadge title="NumPy" />
        <BigBadge title="Matplotlib" />
      </div>
    </div>
  );
};

export default Experience;
