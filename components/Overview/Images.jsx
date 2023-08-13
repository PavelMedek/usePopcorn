import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const Images = ({ images }) => {
  return (
    <div>
      <Heading text="obrázky" className="mb-3" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-6 gap-3">
        {images.map((image) => (
          <div className="relative aspect-square" key={image}>
            <Image src={image} style={{ objectFit: "cover" }} fill alt="st" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
