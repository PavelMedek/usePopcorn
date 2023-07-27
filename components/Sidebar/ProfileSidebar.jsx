import MainProfileSidebar from "./MainProfileSidebar";
import PlatformSidebar from "./PlatformSidebar";
import LeftSidebarContainer from "./LeftSidebarContainer";
import RightSidebarContainer from "./RightSidebarContainer";

const ProfileSidebar = ({ platforms }) => {
  return (
    <>
      <LeftSidebarContainer>
        <PlatformSidebar platforms={platforms} />
      </LeftSidebarContainer>
      <RightSidebarContainer>
        <MainProfileSidebar />
      </RightSidebarContainer>
    </>
  );
};

export default ProfileSidebar;
