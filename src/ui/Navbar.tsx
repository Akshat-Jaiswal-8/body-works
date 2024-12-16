import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { BicepsFlexed, CalendarCheck2, Dumbbell, PersonStanding } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";
import React, { Suspense } from "react";

interface NavItemsProps {
  title: string;
  icon: React.JSX.Element;
  href: string;
}

export const navItems: NavItemsProps[] = [
  {
    title: "Equipments",
    icon: <Dumbbell />,
    href: "/equipments",
  },
  {
    title: "Body Parts",
    icon: <BicepsFlexed />,
    href: "/body-parts",
  },
  {
    title: "Target Muscles",
    icon: <PersonStanding />,
    href: "/target-muscle",
  },
  {
    title: "Routines",
    icon: <CalendarCheck2 />,
    href: "/routine-category",
  },
];

export const Navbar = () => {
  const isSmallDevice: boolean = useMediaQuery("only screen and (max-width : 768px)");
  const showFullIcon: boolean = useMediaQuery("only screen and (max-width : 880px)");
  const showLogoText: boolean = useMediaQuery("only screen and (max-width : 540px)");

  return (
    <section>
      <div className="fixed top-0 z-50 flex h-[4rem] w-full items-center justify-between border-b border-dotted border-b-amber-800 bg-transparent py-4 backdrop-blur dark:border-b-gray-800 xs:px-4 sm:px-8">
        <Link to={"/"} className="flex animate-pulse cursor-pointer items-center">
          <Suspense fallback={<div className={"mr-2 h-8 w-10 rounded-lg"}></div>}>
            <img src={"/logo.webp"} className="mr-2 h-8 w-10 rounded-lg" alt={""} />
          </Suspense>
          {!showLogoText && (
            <p className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text font-poppins text-xl font-bold text-transparent transition-all duration-300 ease-in-out dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500">
              Works
            </p>
          )}
        </Link>

        {!isSmallDevice && (
          <div className={"flex items-center gap-x-8 xl:gap-x-16"}>
            {navItems.map((navItem) => (
              <NavLink
                to={navItem.href}
                key={navItem.title}
                className={({ isActive }) =>
                  isActive
                    ? "flex cursor-pointer items-center gap-x-2 text-amber-700 transition-all duration-100 ease-linear hover:border-b hover:border-b-amber-600 hover:pb-1 dark:text-pink-500 dark:hover:border-b-pink-500"
                    : "flex cursor-pointer items-center gap-x-2 transition-all duration-100 ease-linear hover:border-b hover:border-b-amber-700 hover:pb-1 dark:hover:border-b-pink-500"
                }>
                {navItem.icon}
                {!showFullIcon && <span>{navItem.title}</span>}
              </NavLink>
            ))}
          </div>
        )}
        <div className="flex items-center focus:outline-none">
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};
