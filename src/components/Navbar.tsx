import Button from "./button/Button";

const Navbar = () => {
  return (
    <div className="navbar bg-primary-500 sticky top-0 z-100 flex h-16 items-center justify-between px-5 md:px-20">
      <div className="relative flex items-center gap-3">
        {/* <Button size="sm" variant="text">
          Sean Maier
        </Button> */}
        <p className="text-white before:absolute before:left-0 before:h-[1px] before:w-[120%] before:-translate-y-0.5 before:bg-white before:content-['']">
          Sean Maier
        </p>
      </div>
      <div className="flex gap-5">
        <div className="hidden gap-3 sm:flex">
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About me
          </Button>
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("resume")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Resume
          </Button>
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Work
          </Button>
          <Button
            size="sm"
            variant="text"
            onClick={() =>
              document
                .getElementById("hobbies")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hobbies
          </Button>
        </div>
        <Button
          size="sm"
          className="ml-2"
          onClick={() =>
            (window.location.href = "mailto:sean.maier@outlook.com")
          }
        >
          Contact me!
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
