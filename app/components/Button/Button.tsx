export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="text-[#fbfcfd] px-[20px] py-[5px] min-w-[120px] bg-transparent border border-white 
    rounded-[10px] outline-none cursor-pointer transition-all ease-in-out duration-[0.3s] font-semibold text-base capitalize hover:bg-white hover:text-[#00545d] box_shadow"
    >
      {children}
    </button>
  );
};
