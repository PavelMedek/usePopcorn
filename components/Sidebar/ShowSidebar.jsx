"use client";

import PlatformSidebar from "./PlatformSidebar";
import LeftSidebarContainer from "./LeftSidebarContainer";
import RightSidebarContainer from "./RightSidebarContainer";
import MainShowSidebar from "./MainShowSidebar";

const Sidebar = ({ platforms, params, setShowMenu }) => {
  return (
    <>
      <LeftSidebarContainer>
        <PlatformSidebar platforms={platforms} />
      </LeftSidebarContainer>

      <RightSidebarContainer>
        <MainShowSidebar
          platforms={platforms}
          params={params}
          items="show"
          setShowMenu={setShowMenu}
        />
      </RightSidebarContainer>
    </>
  );
};

export default Sidebar;