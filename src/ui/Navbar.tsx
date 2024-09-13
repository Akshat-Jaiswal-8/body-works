import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import {
  BicepsFlexed,
  CalendarCheck2,
  Dumbbell,
  PersonStanding,
} from "lucide-react";
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
  const isSmallDevice: boolean = useMediaQuery(
    "only screen and (max-width : 768px)",
  );
  const showFullIcon: boolean = useMediaQuery(
    "only screen and (max-width : 880px)",
  );
  const showLogoText: boolean = useMediaQuery(
    "only screen and (max-width : 540px)",
  );

  return (
    <section>
      <div className="flex justify-between items-center h-[4rem] bg-transparent backdrop-blur fixed w-full top-0 z-50 border-b border-b-amber-800 dark:border-b-gray-800 border-dotted xs:px-4 sm:px-8 py-4">
        <Link
          to={"/"}
          className="flex items-center animate-pulse cursor-pointer "
        >
          <Suspense
            fallback={<div className={"h-8 w-10 rounded-lg mr-2"}></div>}
          >
            <img
              src={"/logo.webp"}
              className="h-8 w-10 rounded-lg mr-2"
              alt={""}
            />
          </Suspense>
          {!showLogoText && (
            <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-amber-600 to-amber-500 font-bold font-poppins transition-all duration-300 ease-in-out">
              Works
            </p>
          )}
        </Link>

        {!isSmallDevice && (
          <div className={"flex items-center gap-x-8 xl:gap-x-16 "}>
            {navItems.map((navItem) => (
              <NavLink
                to={navItem.href}
                key={navItem.title}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-x-2 hover:border-b hover:pb-1 hover:border-b-amber-600 dark:hover:border-b-pink-500 transition-all duration-100 cursor-pointer ease-linear text-amber-700 dark:text-pink-500"
                    : "flex items-center gap-x-2 hover:border-b hover:pb-1 hover:border-b-amber-700 dark:hover:border-b-pink-500 transition-all duration-100 cursor-pointer ease-linear"
                }
              >
                {navItem.icon}
                {!showFullIcon && <span>{navItem.title}</span>}
              </NavLink>
            ))}
          </div>
        )}
        <div className="focus:outline-none  flex items-center">
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};
