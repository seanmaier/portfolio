import Button from "./button/Button";
import resumePicture from "../assets/IMG_90951.png";

const AboutMe = () => {
  return (
    <div className="h-screen w-screen items-center justify-center p-15 lg:flex-col">
      <div className="mb-8 flex flex-col gap-4">
        <h2 id="resume" className="text-4xl font-bold italic">
          Hello I'm Sean!
        </h2>
        <p>
          I am a junior developer with a strong interest in software
          engineering. I am eager to learn new things, wether it is related to
          my job or something entirely else. If you want to cooperate don't
          hesistate to contact me!
        </p>
        <Button
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/maiersean/")
          }
        >
          linkedin.com/in/maiersean
        </Button>
      </div>
      <div>
        <div>
          <div className="bg-primary-500 absolute -z-1 h-[200px] w-[308px] translate-y-27"></div>
          <img src={resumePicture} alt="Resume Icon" />
        </div>
        <div className="bg-black p-5">
          <h6 className="mb-3 text-2xl text-white">Contact</h6>
          <div
            onClick={() =>
              (window.location.href = "mailto:sean.maier@outlook.com")
            }
            className="hover:bg-primary-500 flex cursor-pointer items-center gap-3 rounded-2xl p-2 transition-colors duration-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Resume Icon"
              className="ml-2 h-6 w-6"
            />
            <p className="text-white">sean.maier@outlook.de</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
