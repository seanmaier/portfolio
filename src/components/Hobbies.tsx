import { MediaModal } from "./MediaModal";
import travelling from "../assets/IMG_2285.jpeg";
import piano from "../assets/piano.jpg";

const Hobbies = () => {
  return (
    <div
      id="hobbies"
      className="bg-creme flex h-screen flex-col items-center justify-center gap-2"
    >
      <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold italic">
        Hobbies
      </h2>
      <div className="gap- flex w-full flex-col items-center justify-center p-6 md:flex-row md:gap-5">
        <MediaModal
          className="w-100"
          imgSrc={travelling}
          description="Das ist ein Test"
        />
        <MediaModal
          className="w-100"
          imgSrc={piano}
          description="Das ist ein Test"
        />
        <MediaModal className="w-100" videoSrc={"../assets/IMG_2810.MP4"} />
      </div>
    </div>
  );
};

export default Hobbies;
