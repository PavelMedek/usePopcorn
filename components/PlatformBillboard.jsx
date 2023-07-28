// const PlatformBillboard = ({ cover }) => {
//   return (
//     <div className="rounded-xl h-[40rem] overflow-hidden md:h-[20rem] xl:h-[30rem] lg:h-[20rem] sm:h-[15rem]">
//       <div
//         style={{ backgroundImage: `url(${cover})` }}
//         className="w-full bg-cover h-full"
//       >
//         <img src={cover} className="w-full h-full" alt="cover" />
//       </div>
//     </div>
//   );
// };
// export default PlatformBillboard;

import Image from "next/image";

const PlatformBillboard = ({ cover }) => {
  return (
    <div className="relative rounded-3xl md:aspect-square aspect-[2.4/1] bg-cover">
      <Image
        src={cover}
        fill
        alt="cover"
        className="rounded-3xl"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default PlatformBillboard;
