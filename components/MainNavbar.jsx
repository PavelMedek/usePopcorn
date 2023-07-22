"use client";
import { cn } from "@/lib/utils";
import { user } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiOutlineLogout } from "react-icons/ai";

const MainNavbar = ({ platforms }) => {
  const pathname = usePathname();

  const routes = platforms.map((item) => ({
    href: `/${item.name}`,
    label: item.name,
    active: pathname === `/${item.name}`,
    color: item.color,
    image: item.image,
  }));

  const userRoutes = user.map((item) => ({
    href: `/profile`,
    label: item.name,
    active: pathname === `/${item.name}`,
    color: item.color,
    image: item.image,
  }));

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen py-10">
        <div>
          {userRoutes.map((item) => (
            <div key={item.label} className="flex gap-3 mb-3">
              <div
                className="w-1 rounded-r-full"
                style={{
                  backgroundColor: `${
                    item.active ? item.color : "transparent"
                  }`,
                }}
              ></div>
              <Link href={`${item.href}`}>
                <Image
                  width={50}
                  height={50}
                  src={item.image}
                  className="rounded-full"
                  alt={item.label}
                />
              </Link>
            </div>
          ))}
          {routes.map((item) => (
            <div key={item.label} className="flex gap-3 mb-3">
              <div
                className="w-1 rounded-r-full"
                style={{
                  backgroundColor: `${
                    item.active ? item.color : "transparent"
                  }`,
                }}
              ></div>
              <Link href={`${item.href}`}>
                <Image
                  width={50}
                  height={50}
                  src={item.image}
                  className="rounded-full"
                  alt={item.label}
                />
              </Link>
            </div>
          ))}
        </div>

        <Link href="/" className="flex gap-3">
          <div className="w-1 rounded-r-full bg-transparent"></div>
          <AiOutlineLogout className="w-[3.125rem] h-[3.125rem]" />
        </Link>
      </div>
    </>
  );
};

export default MainNavbar;
