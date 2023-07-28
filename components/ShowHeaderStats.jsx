import { FaPlay } from "react-icons/fa";

const ShowHeaderStats = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 grid-cols-5 gap-5">
      <div className="bg-red-700 flex flex-row items-center justify-center h-40 rounded-2xl pr-2">
        <FaPlay className="w-8 h-8" />
      </div>
      <div className="bg-[#1A161E]/75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
        <h1 className="rotate-90 text-lg uppercase text-[#4C4158]">release</h1>
        <p className="text-4xl font-semibold w-full text-center">
          April 7, 2023
        </p>
      </div>
      <div className="bg-[#1A161E]/75 flex flex-row items-center h-40 rounded-2xl pr-2">
        <h1 className="rotate-90 text-lg uppercase text-[#4C4158]">seasons</h1>
        <p className="text-4xl font-semibold w-full text-center">8</p>
      </div>
      <div className="bg-[#1A161E]/75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
        <h1 className="rotate-90 text-lg uppercase text-[#4C4158]">Episodes</h1>
        <p className="text-4xl font-semibold w-full text-center">52</p>
      </div>
      <div className="bg-[#1A161E]/75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
        <h1 className="rotate-90 text-lg uppercase text-[#4C4158]">Length</h1>
        <p className="text-4xl font-semibold w-full text-center">80h 42 min</p>
      </div>
    </div>
  );
};

export default ShowHeaderStats;
