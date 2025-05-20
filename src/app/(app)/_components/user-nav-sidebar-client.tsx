import {
  SidebarSection,
  SidebarHeading,
  SidebarItem,
} from "@/components/sidebar";
import React from "react";

export default function UserNavSideBarClient() {
  return (
    <SidebarSection className="max-lg:hidden">
      <SidebarHeading>Active Projects</SidebarHeading>
      <SidebarItem href="/projects/1">TinyURL Clone</SidebarItem>
      <SidebarItem href="/projects/2">AI Writing Assistant</SidebarItem>
      <SidebarItem href="/projects/3">Habit Tracker App</SidebarItem>
    </SidebarSection>
  );
}
