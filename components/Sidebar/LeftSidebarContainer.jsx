import React from "react";

const LeftSidebarContainer = ({ children }) => {
  return <div className="h-screen sticky top-0 overflow-auto">{children}</div>;
};

export default LeftSidebarContainer;
