"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";

const MainSidebar = ({ platforms, params, setShowMenu, items }) => {
  const shows = platforms.find((el) => el.name === params.platformName);
  const router = useRouter();

  const pathname = usePathname();
  const [_, platformName, showName, neco, articleOrEpisode] =
    pathname.split("/");

  const handleClick = (title) => {
    if (setShowMenu) {
      setShowMenu((prev) => !prev);
    }

    router.push(`/${params.platformName}/${title}`);
  };

  const handleMunu = (link) => {
    if (setShowMenu) {
      setShowMenu((prev) => !prev);
    }

    router.push(link);
  };

  const routes = shows?.series?.map((item) => ({
    href: `/${item.slug}`,
    label: item.title,
    active: pathname === `/${platformName}/${item.slug}`,
    activeToo:
      pathname === `/${platformName}/${item.slug}/clanek/${articleOrEpisode}`,
    pathname,
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
    <div className="flex flex-col">
      {isShow && shows?.series && (
        <div className="mb-10">
          {routesMenu.map((item) => (
            <div
              key={item.label}
              onClick={() => handleMunu(item.href)}
              className={cn(
                "text-white py-3 px-3 transition cursor-pointer flex items-center gap-3 group text-lg rounded-md  hover:bg-[#17141b]"
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

      <div className="flex flex-col gap-2">
        {routes?.map((el) => (
          <div
            onClick={() => handleClick(el.href)}
            key={el.label}
            className={cn(
              "text-white py-3  rounded-md px-3 hover:bg-[#4c4158] transition cursor-pointer",
              el.active
                ? "bg-[#4c4158]"
                : el.activeToo
                ? "bg-[#4c4158]"
                : "bg-transparent"
            )}
          >
            {el.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSidebar;
