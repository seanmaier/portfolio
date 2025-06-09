import Button from "./button/Button";

const Navbar = () => {
  return (
    <div className="bg-primary-500 sticky top-0 z-50 flex h-16 items-center justify-between px-5 md:px-20">
      <div>
        <Button size="sm" variant="text">
          Sean Maier
        </Button>
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
