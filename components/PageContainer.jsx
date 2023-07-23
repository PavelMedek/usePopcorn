"use client";

import React, { useState } from "react";
import MobileNavBar from "./Sidebar/MobileNavBar";

import { BiMenu } from "react-icons/bi";

const PageContainer = ({ children, platforms, params }) => {
  const [show, setShow] = useState(false);
  const [showContent, setshowContent] = useState(true);

  return (
    <div className="w-full">
      {show && (
        <MobileNavBar
          platforms={platforms}
          params={params}
          setShow={setShow}
          setshowContent={setshowContent}
        />
      )}
      <button
        className="md:block absolute right-3 top-3 hidden"
        onClick={() => {
          setShow(true);
          setshowContent(false);
        }}
      >
        <BiMenu className="w-10 h-10" />
      </button>
      {showContent && <div>{children}</div>}
    </div>
  );
};

export default PageContainer;
