"use client";
import { AppSidebar } from "../AppSidebar/AppSidebar";
import { SidebarNav } from "../SidebarNav/SidebarNav";
import { SidebarProvider } from "../ui/sidebar";
import { useState } from "react";

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <SidebarProvider
      defaultOpen={false}
      open={open}
      onOpenChange={setOpen}
      className="bg-gradient bg-gradient-to-b from-cyan-700 to-sky-950"
    >
      {children}
      <SidebarNav open={open} />
      <AppSidebar />
    </SidebarProvider>
  );
};
