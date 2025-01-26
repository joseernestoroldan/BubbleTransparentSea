import {
  IoShareSocial as SocialIcon,
  IoHelp as HelpIcon,
} from "react-icons/io5";
import { IconWrapper } from "../IconWrapper/IconWrapper";

export const ActionButtons = ({ open }: { open: boolean }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 pb-16"
    >
      <IconWrapper open={open}>
        <SocialIcon />
      </IconWrapper>
      <IconWrapper open={open}>
        <HelpIcon />
      </IconWrapper>
    </div>
  );
};
