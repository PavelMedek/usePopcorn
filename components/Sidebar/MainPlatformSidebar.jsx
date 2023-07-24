"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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

  const routes = shows.series.map((item) => ({
    href: `/${item.slug}`,
    label: item.title,
    active: pathname === `/${platformName}/${item.slug}`,
  }));

  const isShow = items === "show";

  return (
    <>
      {isShow && <div>Home</div>}

      {routes.map((el) => (
        <div
          onClick={() => handleClick(el.href)}
          key={el.label}
          className={cn(
            "text-white mb-3 py-1 px-3 hover:bg-[#4c4158] cursor-pointer",
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
