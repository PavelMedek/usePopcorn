"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { BiCategoryAlt, BiLogoBlogger, BiMovie } from "react-icons/bi";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { GiFlatPlatform } from "react-icons/gi";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const MainProfileSidebar = ({ profile, setShowMenu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [_, first, second, third] = pathname.split("/");

  const isAdmin = profile.isAdmin;

  const handleMunu = (link) => {
    if (setShowMenu) {
      setShowMenu((prev) => !prev);
    }

    router.push(link);
  };

  const routes = [
    {
      href: `/profile`,
      label: "Home",
      icon: <AiFillHome />,
      active: pathname === "/profile",
    },
    {
      href: `/profile/my-list`,
      label: "My List",
      icon: <BsReverseListColumnsReverse />,
      active: pathname === "/profile/my-list",
    },
    {
      href: `/profile/for-you`,
      label: "For You",
      icon: <AiFillStar />,
      active: pathname === "/profile/for-you",
    },
  ];

  const adminRoutes = [
    {
      href: `/profile/platforms`,
      label: "Platforms",
      icon: <GiFlatPlatform />,
      active:
        pathname === "/profile/platforms" ||
        pathname === "/profile/platforms/add",
    },
    {
      href: `/profile/tv-shows`,
      label: "TV Shows",
      icon: <PiTelevisionSimpleBold />,
      active:
        pathname === "/profile/tv-shows" ||
        pathname === `/profile/tv-shows/${third}` ||
        pathname === `/profile/tv-shows/${third}/add`,
    },
    {
      href: `/profile/categories`,
      label: "Categories",
      icon: <BiCategoryAlt />,
      active:
        pathname === "/profile/categories" ||
        pathname === "/profile/categories/add",
    },

    {
      href: `/profile/blogs`,
      label: "Blogs",
      icon: <BiLogoBlogger />,
      active:
        pathname === "/profile/blogs" || pathname === "/profile/blogs/add",
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-10">
        <ul>
          {routes.map((item, index) => (
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
        </ul>

        {isAdmin && (
          <ul>
            {adminRoutes.map((item, index) => (
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
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainProfileSidebar;
