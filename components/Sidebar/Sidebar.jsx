"use client";

import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MainPlatformSidebar from "./MainPlatformSidebar";
import PlatformSidebar from "./PlatformSidebar";

const Sidebar = ({ platforms, params, setShowMenu }) => {
  return (
    <>
      <LeftSidebar>
        <PlatformSidebar platforms={platforms} />
      </LeftSidebar>

      <RightSidebar>
        <MainPlatformSidebar
          platforms={platforms}
          params={params}
          items="show"
          setShowMenu={setShowMenu}
        />
      </RightSidebar>
    </>
  );
};

export default Sidebar;
