import Image from "next/image"
export const Logo = () => {
  return (
    <div className="relative w-16 h-16 cursor-pointer opacity-60 rounded-full border border-white box_shadow">
        <Image src={"/logo.png"} alt="Bubble Transparent Sea" fill className=" object-cover object-center"/>
    </div>
  )
}