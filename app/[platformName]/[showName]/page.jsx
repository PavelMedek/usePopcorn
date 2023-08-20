import { getShowsByPlatform } from "@/actions/getShowsByPlatform";
import getEpisodes from "@/actions/getEpisodes";
import getArticles from "@/actions/getArticles";
import getPlatformData from "@/actions/getPlatformData";
import getShow from "@/actions/getShow";

import ShowClient from "./ShowClient";
import NotFound from "@/components/NotFound";

const Page = ({ params }) => {
  const { platformName, showName } = params;

  const show = getShow(platformName, showName);
  const episodes = getEpisodes(show?.episodes);
  const articles = getArticles(show?.articles);
  const shows = getShowsByPlatform(platformName);
  const name = getPlatformData(platformName)?.name;

  const {
    cast,
    categories,
    desc,
    title,
    thumbnail,
    trailer,
    images,
    comments,
    slug,
  } = show || {};

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
      showName={showName}
    />
  );
};

export default Page;
