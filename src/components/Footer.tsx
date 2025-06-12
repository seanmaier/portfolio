import Button from "./button/Button";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary-900 text- flex flex-col gap-15 px-10 py-20">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} - All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white">Back to top</p>
            <Button
              variant="ghost"
              rounded="full"
              icon={<FaArrowUp />}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm"
            ></Button>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-white">HAVE A PROJECT IN MIND?</p>
          <p className="text-[60px] leading-none text-gray-200 md:text-[150px]">
            LET'S TALK
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div className="flex items-center gap-4">
            <Button size="lg" variant="ghost">
              Github
            </Button>
            <Button size="lg" variant="ghost">
              LinkedIn
            </Button>
          </div>
          <p className="text-white">Made with ❤️ by Sean</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
