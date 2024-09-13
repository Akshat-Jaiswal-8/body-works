import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/ui/Navbar.tsx";
import { Home } from "lucide-react";

export const FooterNavbar = (): React.ReactNode => {
  const footerNavItems = [...navItems, { title: "Home", icon: <Home />, href: "/" }];
  return (
    <div className="flex w-full items-center px-4 xs:mx-2 xs:justify-end md:h-[12rem] md:justify-center">
      <FloatingDock mobileClassName="translate-y-26" items={footerNavItems} />
    </div>
  );
};
