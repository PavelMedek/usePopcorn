import ShowHeaderImage from "./ShowHeaderImage";
import ShowHeaderTitle from "./ShowHeaderTitle";
import ShowHeaderCategories from "./ShowHeaderCategories";
import ShowHeaderStats from "./ShowHeaderStats";
import AddToMyListButton from "./AddToMyListButton";

const ShowHeader = ({
  categories,
  thumbnail,
  title,
  episodes,
  showRelease,
}) => {
  return (
    <>
      <ShowHeaderImage thumbnail={thumbnail} />
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 mt-[-300px] gap-3">
        <ShowHeaderTitle title={title} />
        <ShowHeaderCategories categories={categories} />
        <ShowHeaderStats episodes={episodes} showRelease={showRelease} />
      </div>
    </>
  );
};

export default ShowHeader;
