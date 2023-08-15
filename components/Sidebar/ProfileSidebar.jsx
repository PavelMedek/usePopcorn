import MainProfileSidebar from "./MainProfileSidebar";
import PlatformSidebar from "./PlatformSidebar";
import LeftSidebarContainer from "./LeftSidebarContainer";
import RightSidebarContainer from "./RightSidebarContainer";

const ProfileSidebar = ({ platforms, profile, setShowMenu }) => {
  return (
    <>
      <LeftSidebarContainer>
        <PlatformSidebar platforms={platforms} profile={profile} />
      </LeftSidebarContainer>
      <RightSidebarContainer>
        <MainProfileSidebar profile={profile} setShowMenu={setShowMenu} />
      </RightSidebarContainer>
    </>
  );
};

export default ProfileSidebar;
