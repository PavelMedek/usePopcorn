import React from "react";

const RightSidebar = ({ children }) => {
  return (
    <div className="bg-[#1A161E] w-80 h-screen sticky top-0 md:hidden overflow-auto p-10">
      {children}
    </div>
  );
};

export default RightSidebar;
