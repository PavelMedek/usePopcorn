import Image from "next/image";
import Link from "next/link";

const ShowCard = ({ name, show, secondary }) => {
  console.log(name);

  return (
    <Link
      href={secondary ? `/${name}/${show.slug}` : `${name}/${show.slug}`}
      key={show.slug}
    >
      <div key={show.slug} className="relative aspect-video">
        <Image src={show.thumbnail} fill alt="thumbnail" />

        <div className="absolute bottom-0 w-full backdrop-blur-sm px-3 py-3">
          {show.title}
        </div>
      </div>
    </Link>
  );
};

export default ShowCard;
