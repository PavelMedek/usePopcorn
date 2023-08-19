import Image from "next/image";

import getPlatformData from "@/actions/getPlatformData";
import getShowsByCategory from "@/actions/getShowsByCategory";

import ShowCard from "@/components/ShowCard";

const page = ({ params }) => {
  const platformName = params.platformName;
  const categoryName = decodeURIComponent(params.categoryName);

  const platform = getPlatformData(params.platformName);

  const showsInSelectedCategory = getShowsByCategory(
    platformName,
    categoryName
  );

  if (!showsInSelectedCategory || showsInSelectedCategory.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5 justify-center w-full">
        <h1 className="text-5xl uppercase font-bold">No shows found</h1>
        <Image
          src="/images/Oops! 404 Error with a broken robot-cuate.svg"
          width={300}
          height={300}
          alt="not found"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col p-16 md:py-16 md:px-5 gap-10">
      <h1 className="uppercase text-5xl">
        {categoryName} - {platform.name}
      </h1>
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-4 gap-5">
        {showsInSelectedCategory.map((show, index) => (
          <ShowCard
            show={show}
            key={index}
            name={show.platformSlug}
            secondary={true}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
