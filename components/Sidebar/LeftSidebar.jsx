import React from "react";

const LeftSidebar = ({ children }) => {
  return (
    <div className="pr-3 h-screen sticky top-0 overflow-auto">{children}</div>
  );
};

export default LeftSidebar;
