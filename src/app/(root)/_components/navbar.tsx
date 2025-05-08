"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="h-20 flex border-b border-primary justify-between font-medium">
      <Link className="pl-6 flex items-center" href="/">
        <span className="text-5xl font-semibold">App</span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            isActive={item.href === pathname}
            key={item.href}
            {...item}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 border-primary px-12 h-full rounded-none transition-colors text-xl"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 border-secondary px-12 h-full rounded-none transition-colors text-xl"
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>
    </nav>
  );
}

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}
function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent hover:text-secondary text-primary rounded-lg hover:border-primary font-semibold border-transparent text-lg px-3.5",
        isActive && "bg-selected text-button"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];
