import { useRouter } from "next/navigation";

const MainShowsSidebar = ({ platforms, params, setShow, setshowContent }) => {
  const shows = platforms.find((el) => el.name === params.platformName);
  const router = useRouter();

  const handleClick = (title) => {
    router.push(`/${params.platformName}/${title}`);

    if (setShow && setshowContent) {
      setShow(false);
      setshowContent(true);
    }
  };

  return (
    <>
      {shows.series.map((el) => (
        <div
          onClick={() => handleClick(el.title)}
          key={el.title}
          className="text-white mb-3 bg-[#4c4158] py-1 px-3"
        >
          {el.title}
        </div>
      ))}
    </>
  );
};

export default MainShowsSidebar;
