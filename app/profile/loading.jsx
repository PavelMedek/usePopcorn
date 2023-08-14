import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <PuffLoader size={100} color="red" />
    </div>
  );
};

export default Loading;
