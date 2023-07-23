import Link from "next/link";
import React from "react";

const MobileNavBar = ({ setShow, setshowContent }) => {
  return (
    <div className="z-50 inset-0 min-h-screen bg-red-700 absolute p-5">
      <button
        className="block"
        onClick={() => {
          setShow(false);
          setshowContent(true);
        }}
      >
        Close
      </button>
      <div className="flex flex-col">
        <Link href="/netflix">netflix</Link>
        <Link href="/hbomax">hbomax</Link>
        <Link href="/primevideo">primevideo</Link>
        <Link href="/disney">disney</Link>
      </div>
    </div>
  );
};

export default MobileNavBar;
