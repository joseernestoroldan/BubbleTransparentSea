import { Bubble } from "../Bubble/Bubble"

export const Bubbles = () => {
  return (
    <div className="w-full flex items-center justify-around absolute -bottom-[70px]">
        {Array.from({ length: 5 }).map((_, index) => (
            <Bubble key={index} />
        ))}
    </div>
  )
}