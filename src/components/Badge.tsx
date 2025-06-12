interface Props {
  children?: React.ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <span className="mr-2 mb-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md ring-2 shadow-black">
      {children}
    </span>
  );
};

export default Badge;
