import getTotalLength from "@/actions/getTotalLength";
import getTotalSeasonsAndEpisodes from "@/actions/getTotalSeasonsAndEpisodes";
import { FaPlay } from "react-icons/fa";

const ShowHeaderStats = ({ episodes, showRelease }) => {
  const { totalHours, remainingMinutes } = getTotalLength(episodes);
  const { totalSeasons, totalEpisodes } = getTotalSeasonsAndEpisodes(episodes);

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-cols-5 gap-5">
      <div className="bg-red-700 flex justify-center items-center aspect-video rounded-xl">
        <FaPlay className="w-8 h-8" />
      </div>
      <div className="bg-[#1A161E] bg-opacity-75 flex justify-start items-center aspect-video rounded-xl">
        <div className="transform -rotate-90">
          <h1 className="text-base uppercase text-[#4C4158]">release</h1>
        </div>
        <p className="text-2xl font-semibold w-full text-center">
          {showRelease}
        </p>
      </div>
      <div className="bg-[#1A161E] bg-opacity-75 flex justify-start items-center aspect-video rounded-xl">
        <div className="transform -rotate-90">
          <h1 className="text-base uppercase text-[#4C4158]">seasons</h1>
        </div>
        <p className="text-2xl font-semibold w-full text-center">
          {" "}
          {totalSeasons}{" "}
        </p>
      </div>
      <div className="bg-[#1A161E] bg-opacity-75 flex justify-start items-center aspect-video rounded-xl">
        <div className="transform -rotate-90">
          <h1 className="text-base uppercase text-[#4C4158]">Episodes</h1>
        </div>
        <p className="text-2xl font-semibold w-full text-center">
          {totalEpisodes}
        </p>
      </div>
      <div className="bg-[#1A161E] bg-opacity-75 flex justify-start items-center aspect-video rounded-xl">
        <div className="transform -rotate-90">
          <h1 className="text-base uppercase text-[#4C4158]">Length</h1>
        </div>
        <p className="text-2xl font-semibold w-full text-center">
          {totalHours} h {remainingMinutes} mins
        </p>
      </div>
    </div>
  );
};

export default ShowHeaderStats;
