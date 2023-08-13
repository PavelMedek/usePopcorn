import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ text, className }) => {
  return (
    <h2 className={cn("text-2xl uppercase text-[#4C4158]", className)}>
      {text}
    </h2>
  );
};

export default Heading;
