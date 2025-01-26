import Image from "next/image";

export const Bubble = () => {
  return (
    <div className="relative w-[50px] h-[50px] bubble-animation">
      <Image
        src={"/bubble.png"}
        fill
        alt="Bubble Transparent Sea"
        className=" object-contain"
      />
    </div>
  );
};
