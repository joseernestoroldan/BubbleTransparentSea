import { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";

type SidebarSectionProps = {
  nameSection: string;
  items?: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
};

export const SidebarSection = ({ items, nameSection }: SidebarSectionProps) => {
  return (
    <SidebarGroup className="bg-transparent text-white text-opacity-85">
      <SidebarGroupLabel className="bg-transparent font-bold text-2xl">
        {nameSection}
      </SidebarGroupLabel>
      <SidebarGroupContent className="bg-transparent">
        <SidebarMenu className="bg-transparent pt-8">
          {items?.map((item) => (
            <SidebarMenuItem key={item.label} className="hover:bg-white hover:bg-opacity-20 rounded-[5px] mb-4">
              <SidebarMenuButton asChild className="font-semibold">
                <Link href={item.href} className="text-lg">
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
