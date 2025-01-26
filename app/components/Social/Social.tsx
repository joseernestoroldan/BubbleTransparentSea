import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";
import { IconWrapper } from "../IconWrapper/IconWrapper";

export const Social = ({ open }: { open: boolean }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4"
    >
      <IconWrapper open={open}>
        <FacebookIcon />
      </IconWrapper>
      <IconWrapper open={open}>
        <InstagramIcon />
      </IconWrapper>
      <IconWrapper open={open}>
        <TwitterIcon />
      </IconWrapper>
    </div>
  );
};
