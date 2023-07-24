"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

const MainShowsSidebar = ({
  platforms,
  params,
  setShow,
  setshowContent,
  items,
}) => {
  const shows = platforms.find((el) => el.name === params.platformName);
  const router = useRouter();

  const pathname = usePathname();
  const [_, platformName, showName] = pathname.split("/");

  const handleClick = (title) => {
    router.push(`/${params.platformName}/${title}`);

    if (setShow && setshowContent) {
      setShow(false);
      setshowContent(true);
    }
  };

  const handleMunu = (link) => {
    router.push(link);

    if (setShow && setshowContent) {
      setShow(false);
      setshowContent(true);
    }
  };

  const routes = shows?.series.map((item) => ({
    href: `/${item.slug}`,
    label: item.title,
    active: pathname === `/${platformName}/${item.slug}`,
  }));

  const isShow = items === "show";

  const platformColor = platforms.find((el) => el.name === platformName)?.color;

  const routesMenu = [
    {
      href: `/${platformName}`,
      label: "Menu",
      active: pathname === `/${platformName}`,
      color: platformColor,
      icon: <AiFillHome />,
    },
  ];

  return (
    <>
      {isShow && shows?.series && (
        <div className="mb-10">
          {routesMenu.map((item) => (
            <div
              key={item.label}
              onClick={() => handleMunu(item.href)}
              className={cn(
                "text-white py-3 px-3 transition cursor-pointer flex w-full items-center gap-3 group text-lg rounded-md  hover:bg-[#17141b]"
              )}
            >
              <div
                className={cn(
                  "group-hover:text-red-500",
                  item.active ? "text-red-500" : "text-white"
                )}
              >
                {item.icon}
              </div>
              <div
                className={cn(
                  "group-hover:text-red-500",
                  item.active ? "text-red-500" : "text-white"
                )}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {routes?.map((el) => (
        <div
          onClick={() => handleClick(el.href)}
          key={el.label}
          className={cn(
            "text-white  py-3 rounded-md px-3 hover:bg-[#4c4158] transition cursor-pointer",
            el.active ? "bg-[#4c4158]" : "bg-transparent"
          )}
        >
          {el.label}
        </div>
      ))}
    </>
  );
};

export default MainShowsSidebar;
