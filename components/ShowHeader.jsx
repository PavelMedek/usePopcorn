import ShowHeaderImage from "./ShowHeaderImage";
import ShowHeaderTitle from "./ShowHeaderTitle";
import ShowHeaderCategories from "./ShowHeaderCategories";
import ShowHeaderStats from "./ShowHeaderStats";

const ShowHeader = ({ categories, thumbnail, title }) => {
  return (
    <>
      <ShowHeaderImage thumbnail={thumbnail} />
      <div className="w-full flex flex-col p-16 md:py-16 md:px-5 mt-[-300px] gap-3">
        <ShowHeaderTitle title={title} />
        <ShowHeaderCategories categories={categories} />
        <ShowHeaderStats />
      </div>
    </>
  );
};

export default ShowHeader;
