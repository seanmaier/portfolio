interface Props {
  title: string;
  children: React.ReactNode;
}

export const ProjectCard = ({ children, title }: Props) => {
  return (
    <div className="from-secondary-200 to-secondary-900 lg:max-w-1xl flex max-w-md flex-col rounded-2xl bg-gradient-to-br p-10 shadow-md shadow-black">
      <h2 className="font-jetbrains text-4xl font-bold text-white">{title}</h2>
      {children}
    </div>
  );
};
