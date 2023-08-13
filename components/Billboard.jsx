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
