import BigBadge from "./BigBadge";

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-creme flex w-screen flex-col items-center justify-center gap-10 py-20 lg:px-100"
    >
      <h2 className="mb-10 text-center text-4xl font-bold">
        I already worked with a couple of technologies.
      </h2>
      <h3 className="text-4xl">Frontend</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="HTML" />
        <BigBadge title="CSS" />
        <BigBadge title="TypeScript" />
        <BigBadge title="Tailwind" />
        <BigBadge title="React" />
        <BigBadge title="React-Hook-Forms" />
        <BigBadge title="React-Router" />
        <BigBadge title="Zod" />
        <BigBadge title="Zustand" />
      </div>
      <h3 className="text-4xl">Backend</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="C#" />
        <BigBadge title="ASP.NET Core" />
        <BigBadge title="EF Core" />
        <BigBadge title="REST API" />
      </div>
      <h3 className="text-4xl">Databases</h3>
      <div className="flex max-w-xl flex-wrap justify-center gap-5">
        <BigBadge title="PostgreSQL" />
        <BigBadge title="SQLite" />
      </div>
      <h3 className="text-4xl">Data Analytics</h3>
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
