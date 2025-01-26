export const IconWrapper = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) => (
  <div
    className={`w-[35] cursor-pointer h-[35] rounded-full border-gray-200 border flex justify-center items-center text-gray-200 border-opacity-50 ${
      open ? "opacity-20 hover:opacity-100" : "opacity-100 hover:opacity-70"
    }`}
  >
    {children}
  </div>
);
