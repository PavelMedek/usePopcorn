"use client";

import React, { useState } from "react";
import MobileNavBar from "./Sidebar/MobileNavBar";

const PageContainer = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showContent, setshowContent] = useState(true);

  return (
    <div className="w-full">
      {show && (
        <MobileNavBar setShow={setShow} setshowContent={setshowContent} />
      )}
      <button
        className="md:block hidden p-1 bg-gray-900"
        onClick={() => {
          setShow(true);
          setshowContent(false);
        }}
      >
        show
      </button>
      {showContent && <div>{children}</div>}
    </div>
  );
};

export default PageContainer;
