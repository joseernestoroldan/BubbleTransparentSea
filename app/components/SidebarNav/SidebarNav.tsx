import { ActionButtons } from "../ActionButtons/ActionButtons";
import { Social } from "../Social/Social";
import { TriggerSidebar } from "../TriggerSidebar/TriggerSidebar";

export const SidebarNav = ({ open }: { open: boolean }) => {
  return (
    <div
      className="flex flex-col justify-between items-center "
    >
      <TriggerSidebar open={open} />
      <Social open={open}   />
      <ActionButtons open={open}  />
    </div>
  );
};
