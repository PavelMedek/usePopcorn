import React from "react";

const page = ({ params }) => {
  const showName = params.showName;

  return <div>{showName}</div>;
};

export default page;
