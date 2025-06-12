interface Props {
  title: string;
}

const BigBadge = ({ title }: Props) => {
  return (
    <div className="bg-tertiary-500 flex h-15 items-center justify-center rounded-2xl px-3 text-white opacity-90 shadow-2xl outline-2 outline-black">
      <span className="font-jetbrains text-xl">{title}</span>
      <span className="ml-3 h-4 w-4 rounded-full outline-2 outline-black"></span>
    </div>
  );
};

export default BigBadge;
