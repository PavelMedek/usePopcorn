import React from "react";

const LeftSidebar = ({ children }) => {
  return <div className="mr-3 h-screen sticky top-0 md:hidden">{children}</div>;
};

export default LeftSidebar;
