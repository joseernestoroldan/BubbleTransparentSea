"use client";

import { useSidebar } from "../ui/sidebar";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { IoMdClose as CloseIcon } from "react-icons/io";

export const TriggerSidebar = ({ open }: { open: boolean }) => {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      onClick={toggleSidebar}
      className="p-4 text-white text-[36px] font-normal text-opacity-50"
    >
      {!open ? <MenuIcon /> : <CloseIcon />}
    </button>
  );
};
