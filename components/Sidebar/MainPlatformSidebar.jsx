import { useRouter } from "next/navigation";
import React from "react";

const MainShowsSidebar = ({ platforms, params }) => {
  const shows = platforms.find((el) => el.name === params.platformName);
  const router = useRouter();

  const handleClick = (title) => {
    router.push(`/${params.platformName}/${title}`);
  };

  return (
    <>
      {shows.series.map((el) => (
        <div
          onClick={() => handleClick(el.title)}
          key={el.title}
          className="bg-white text-black mb-3"
        >
          {el.title}
        </div>
      ))}
    </>
  );
};

export default MainShowsSidebar;
