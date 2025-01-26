import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  return (
    <div className="w-full px-16 mx-auto mt-4 flex flex-row justify-between items-start  overflow-visible">
      <Logo />
    </div>
  );
};
