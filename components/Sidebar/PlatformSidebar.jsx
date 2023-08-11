"use client";

import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { user } from "@/lib/data";

const PlatformSidebar = ({ platforms }) => {
  const pathname = usePathname();
  const [_, platformName, showName, neco, articleOrEpisode] =
    pathname.split("/");

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

  const userRoutes = user.map((item) => ({
    href: "/profile",
    label: item.name,
    isActive: pathname === `/${item.name}`,
    color: item.color,
    image: item.image,
  }));

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
        {userRoutes.map((item) => generateSidebarItem(item, item.isActive))}
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
