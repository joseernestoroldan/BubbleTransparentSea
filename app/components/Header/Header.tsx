export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-[44px] text-white capitalize italic font-bold text_shadow text-opacity-85 text-center">
      {children}
    </h1>
  );
};
