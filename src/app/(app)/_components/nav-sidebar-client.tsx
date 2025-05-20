"use client";

import {
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/sidebar";

import {
  Cog6ToothIcon,
  HomeIcon,
  MegaphoneIcon,
  Square2StackIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const BASE_URL = "/dashboard";
const navItems = [
  { name: "Dashboard", href: BASE_URL, icon: HomeIcon },
  { name: "Projects", href: `${BASE_URL}/projects`, icon: Square2StackIcon },
  { name: "Tasks", href: `${BASE_URL}/tasks`, icon: TicketIcon },
  { name: "Broadcasts", href: `${BASE_URL}/broadcasts`, icon: MegaphoneIcon },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
  // { name: "Launch Updates", href: "/updates", icon: Rocket },
];

export default function NavSideBarClient() {
  const pathname = usePathname();

  return (
    <SidebarSection>
      {navItems.map((navItem) => {
        const Icon = navItem.icon;
        return (
          <SidebarItem
            key={navItem.name}
            href={navItem.href}
            current={pathname === navItem.href}
          >
            <Icon />
            <SidebarLabel>{navItem.name}</SidebarLabel>
          </SidebarItem>
        );
      })}
    </SidebarSection>
  );
}
