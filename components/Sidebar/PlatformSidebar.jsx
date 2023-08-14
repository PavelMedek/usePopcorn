"use client";

import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PlatformSidebar = ({ platforms, profile }) => {
  const pathname = usePathname();
  const currentUser = profile;
  const [_, platformName, showName, neco, articleOrEpisode] =
    pathname.split("/");

  const activeRouthProfile =
    pathname === "/profile" ||
    pathname === "/profile/my-list" ||
    pathname === "/profile/for-you";

  const generateSidebarItem = (item, isActive) => (
    <div key={item.label} className="flex gap-3 mb-3">
      <div
        className="w-1 rounded-r-full"
        style={{
          backgroundColor: isActive ? item.color : "transparent",
        }}
      ></div>
      <Link href={item.href}>
        <Image
          width={50}
          height={50}
          src={item.image}
          className="rounded-full"
          alt={item.label}
        />
      </Link>
    </div>
  );

  const platformRoutes = platforms.map((item) => ({
    href: `/${item.name}`,
    label: item.name,
    isActive:
      pathname === `/${item.name}` ||
      pathname === `/${item.name}/${showName}` ||
      pathname === `/${item.name}/${showName}/${neco}/${articleOrEpisode}` ||
      pathname === `/${item.name}/categorie/${neco}`,
    color: item.color,
    image: item.image,
  }));

  return (
    <div className="pr-4 flex flex-col justify-between min-h-screen py-16">
      <div>
        <div className="flex gap-3 mb-3">
          <div
            className="w-1 rounded-r-full"
            style={{
              backgroundColor: activeRouthProfile ? "#4C4158" : "transparent",
            }}
          ></div>
          <Link href="/profile">
            <Image
              width={50}
              height={50}
              src={currentUser.image}
              className="rounded-full"
              alt={currentUser.name}
            />
          </Link>
        </div>

        {platformRoutes.map((item) => generateSidebarItem(item, item.isActive))}
      </div>

      <Link href="/" className="flex gap-3">
        <div className="w-1 rounded-r-full bg-transparent"></div>
        <AiOutlineLogout className="w-[3.125rem] h-[3.125rem]" />
      </Link>
    </div>
  );
};

export default PlatformSidebar;
