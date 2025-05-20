import { SidebarLayout } from "@/components/sidebar-layout";
import AppSidebar from "./_components/sidebar";
import AppNavbar from "./_components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarLayout sidebar={<AppSidebar />} navbar={<AppNavbar />}>
      {children}
    </SidebarLayout>
  );
}
