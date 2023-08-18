"use client";

import React, { useState } from "react";
import Sidebar from "./ShowSidebar";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ProfileSidebar from "./ProfileSidebar";

const MobileNavBar = ({ platforms, params, profile, profileArr, series }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="absolute right-5 top-5 hidden md:block"
      >
        <BiMenu className="w-10 h-10" />
      </button>

      {showMenu && (
        <div className="md:fixed md:z-50 md:w-screen md:h-screen md:flex md:flex-col md:bg-[#0d0c0f] md:duration-700 hidden">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="absolute right-5 top-5 hidden md:block z-50"
          >
            <AiOutlineCloseCircle className="w-10 h-10" />
          </button>
          <nav className="md:flex sticky top-0 h-screen">
            {profile ? (
              <ProfileSidebar
                platforms={platforms}
                profile={profileArr}
                setShowMenu={setShowMenu}
              />
            ) : (
              <Sidebar
                setShowMenu={setShowMenu}
                platforms={platforms}
                params={params}
                profile={profileArr}
                series={series}
              />
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
