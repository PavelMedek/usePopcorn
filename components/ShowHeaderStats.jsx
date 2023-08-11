import { FaPlay } from "react-icons/fa";

const ShowHeaderStats = ({ episodes, showRelease }) => {
  const getTotalLength = (episodes) => {
    if (!episodes || episodes.length === 0) {
      return { totalHours: 0, remainingMinutes: 0 };
    }

    const totalMinutes = episodes.reduce(
      (acc, episode) => acc + episode.length,
      0
    );
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    return { totalHours, remainingMinutes };
  };

  const getTotalSeasonsAndEpisodes = (episodes) => {
    if (!episodes || episodes.length === 0) {
      return { totalSeasons: 0, totalEpisodes: 0 };
    }

    const totalSeasons = Math.max(...episodes.map((episode) => episode.season));
    const totalEpisodes = episodes.length;
    return { totalSeasons, totalEpisodes };
  };

  const { totalHours, remainingMinutes } = getTotalLength(episodes);
  const { totalSeasons, totalEpisodes } = getTotalSeasonsAndEpisodes(episodes);

  return (
    // <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-5 gap-5">
    //   <div className="bg-red-700 flex flex-row items-center justify-center h-40 rounded-2xl pr-2">
    //     <FaPlay className="w-8 h-8" />
    //   </div>
    //   <div className="relative bg-[#1A161E]/75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
    //     <h1 className="rotate-90 text-base uppercase text-[#4C4158] md:text-base h-0">
    //       release
    //     </h1>
    //     <p className=" absolute text-2xl font-semibold w-full text-center md:text-2xl ">
    //       April 7, 2023
    //     </p>
    //   </div>
    //   <div className="relative bg-[#1A161E]/75 flex flex-row items-center h-40 rounded-2xl pr-2">
    //     <h1 className="rotate-90 text-base uppercase text-[#4C4158] md:text-base h-0">
    //       seasons
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center md:text-2xl">
    //       8
    //     </p>
    //   </div>
    //   <div className="relative bg-[#1A161E]/75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
    //     <h1 className="rotate-90 text-base uppercase text-[#4C4158] md:text-base h-0">
    //       Episodes
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center md:text-2xl">
    //       52
    //     </p>
    //   </div>
    //   <div className="relative bg-[#1A161E]/75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
    //     <h1 className="rotate-90 text-base uppercase text-[#4C4158] md:text-base h-0">
    //       Length
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center">
    //       80h 42 min
    //     </p>
    //   </div>
    // </div>

    // <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-5 gap-5">
    //   <div className="bg-red-700 flex flex-row items-center justify-center h-40 rounded-2xl pr-2">
    //     <FaPlay className="w-8 h-8" />
    //   </div>
    //   <div className="relative bg-[#1A161E] bg-opacity-75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
    //     <h1 className="absolute left-0 top-5 rotate-90 text-base uppercase text-[#4C4158] md:text-base md:block transform origin-bottom-left">
    //       release
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center md:text-2xl">
    //       April 7, 2023
    //     </p>
    //   </div>
    //   <div className="relative bg-[#1A161E] bg-opacity-75 flex flex-row items-center h-40 rounded-2xl pr-2">
    //     <h1 className="absolute left-0 top-5 rotate-90 text-base uppercase text-[#4C4158] md:text-base md:block transform origin-bottom-left">
    //       seasons
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center md:text-2xl">
    //       8
    //     </p>
    //   </div>
    //   <div className="relative bg-[#1A161E] bg-opacity-75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
    //     <h1 className="absolute left-0 top-5 rotate-90 text-base uppercase text-[#4C4158] md:text-base md:block transform origin-bottom-left">
    //       Episodes
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center md:text-2xl">
    //       52
    //     </p>
    //   </div>
    //   <div className="relative bg-[#1A161E] bg-opacity-75 flex flex-row items-center justify-start h-40 rounded-2xl pr-2">
    //     <h1 className="absolute left-0 top-5 rotate-90 text-base uppercase text-[#4C4158] md:text-base md:block transform origin-bottom-left">
    //       Length
    //     </h1>
    //     <p className="absolute text-2xl font-semibold w-full text-center">
    //       80h 42 min
    //     </p>
    //   </div>
    //   <div className="bg-[#1A161E] bg-opacity-75 flex justify-around items-center aspect-video">
    //     <div className="transform -rotate-90">
    //       <h1 className="text-base uppercase text-[#4C4158]">Length</h1>
    //     </div>
    //     <p className="text-2xl font-semibold">80h 42 min</p>
    //   </div>
    // </div>

    // <div className="grid grid-cols-5 gap-5 text-white xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
    //   <div className="relative flex aspect-video items-center rounded-xl bg-[#1A161E]">
    //     <div className="rotate-90">release</div>
    //     <div className="absolute w-full text-center text-4xl">
    //       April 7, 2023
    //     </div>
    //   </div>
    //   <div className="relative flex aspect-video items-center rounded-xl bg-[#1A161E]">
    //     <div className="rotate-90">seasons</div>
    //     <div className="absolute w-full text-center text-4xl">8</div>
    //   </div>
    //   <div className="relative flex aspect-video items-center rounded-xl bg-[#1A161E]">
    //     <div className="rotate-90">Length</div>
    //     <div className="absolute w-full text-center text-4xl">80h 42 min</div>
    //   </div>
    //   <div className="relative flex aspect-video items-center rounded-xl bg-[#1A161E]">
    //     <div className="rotate-90">Episodes</div>
    //     <div className="absolute w-full text-center text-4xl">52</div>
    //   </div>
    //   <div className="relative flex aspect-video items-center rounded-xl bg-[#1A161E]">
    //     <div className="rotate-90">rating</div>
    //     <div className="absolute w-full text-center text-4xl">80h 42 min</div>
    //   </div>
    // </div>

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
