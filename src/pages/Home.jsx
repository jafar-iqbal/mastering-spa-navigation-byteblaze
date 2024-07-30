import wave from "../assets/wave.svg";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero />
      <img className="absolute bottom-0 w-full" src={wave} alt="image" />
    </div>
  );
};

export default Home;
