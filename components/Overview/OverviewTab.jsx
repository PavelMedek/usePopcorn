import Image from "next/image";
import Button from "../Button";
import Heading from "../Heading";
import Description from "./Description";
import Cast from "./Cast";
import Trailer from "./Trailer";
import Images from "./Images";
import Comments from "./Comments";

const OverviewTab = ({ desc, cast, trailer, images, comments }) => {
  return (
    <>
      <Description desc={desc} />
      <Cast cast={cast} />
      <Trailer trailer={trailer} />
      <Images images={images} />
      <Comments comments={comments} />
    </>
  );
};

export default OverviewTab;
