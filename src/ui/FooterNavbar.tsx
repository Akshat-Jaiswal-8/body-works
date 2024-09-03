import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navItems } from "@/ui/Navbar.tsx";
import { Home } from "lucide-react";

export const FooterNavbar = (): React.ReactNode => {
  const footerNavItems = [
    ...navItems,
    { title: "Home", icon: <Home />, href: "/" },
  ];
  return (
    <div className="flex items-center xs:justify-end md:justify-center md:h-[12rem] px-4 xs:my-6 w-full">
      <FloatingDock mobileClassName="translate-y-26" items={footerNavItems} />
    </div>
  );
};
