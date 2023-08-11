import { platforms } from "@/lib/data";
import ShowClient from "./ShowClient";

const Page = ({ params }) => {
  const showName = params.showName;
  const platform = platforms.find((el) => el.name === params.platformName);
  const show = platform?.series?.find((el) => el.slug === showName);

  const {
    cast,
    categories,
    desc,
    title,
    thumbnail,
    trailer,
    images,
    comments,
    episodes,
    articles,
    slug,
  } = show || {};

  const shows = platform?.series;
  const name = platform?.name;

  if (!show) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-7xl uppercase w-full p-16 md:py-16 md:px-5 gap-10">
        <p>No show</p>
        <button
          onClick={() => router.back()}
          className="bg-blue-500 py-4 w-36 rounded-md font-bold text-lg text-center uppercase sm:py-2"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <ShowClient
      categories={categories}
      cast={cast}
      images={images}
      comments={comments}
      shows={shows}
      desc={desc}
      title={title}
      thumbnail={thumbnail}
      trailer={trailer}
      episodes={episodes}
      articles={articles}
      slug={slug}
      name={name}
    />
  );
};

export default Page;
