import { platforms } from "@/lib/data";
import ShowClient from "./ShowClient";
import NotFound from "@/components/NotFound";

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
    return <NotFound type="show" />;
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
