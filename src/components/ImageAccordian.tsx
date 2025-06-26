// https://cruip.com/create-an-image-accordion-with-tailwind/

interface Props {
  items: Item[];
}

export type Item = {
  title: string;
  description: string;
  url: string;
};

const ImageAccordian = ({ items }: Props) => {
  return (
    <>
      <div className="group mt-3 mb-1 flex justify-center gap-2 max-lg:flex-col">
        {items.map((item, i: number) => {
          return (
            <article
              key={i}
              className="group/article relative w-full overflow-hidden rounded-xl transition-all duration-600 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-2/3 before:bg-gradient-to-t before:from-black/90 before:transition-opacity after:absolute after:inset-0 after:rounded-lg after:bg-white/0 after:opacity-0 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300 focus-within:before:opacity-100 lg:before:opacity-0 lg:hover:before:opacity-100 lg:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] lg:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 lg:group-hover:[&:not(:hover)]:w-[20%] lg:group-hover:[&:not(:hover)]:after:opacity-100"
            >
              <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-3 text-white">
                <h1 className="font-jetbrains text-2xl font-medium transition duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-300 lg:translate-y-2 lg:opacity-0">
                  {item.title}
                </h1>
                <span className="text-xl font-medium transition duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-500 lg:translate-y-2 lg:opacity-0">
                  {item.description}
                </span>
              </div>
              <img
                className="h-90 w-full object-cover lg:h-[420px]"
                src={item.url}
                width="960"
                height="480"
                alt="Image 01"
              />
            </article>
          );
        })}
      </div>
    </>
  );
};

export default ImageAccordian;
