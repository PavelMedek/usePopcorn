import React from "react";
import Heading from "../Heading";
import Button from "../Button";
import Image from "next/image";

const Comments = ({ comments }) => {
  return (
    <div>
      <Heading text="comentáře" className="mb-3" />

      <textarea className=" w-full h-40 bg-[#4C4158] rounded-xl"></textarea>
      <div className="pt-4 w-full flex justify-end">
        <Button text="send" />
      </div>

      <div className="flex gap-5 flex-col pb-5">
        {comments.map((commnt, index) => (
          <div className="flex flex-row w-full gap-3" key={index}>
            <div>
              <div className="relative w-14 h-14 rounded-full">
                <Image
                  src={commnt.image}
                  fill
                  alt="user"
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <h1>{commnt.name}</h1>
              <p className="font-thin">{commnt.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
