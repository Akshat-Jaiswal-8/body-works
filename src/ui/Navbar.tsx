import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { BicepsFlexed, CalendarCheck2, Dumbbell, PersonStanding } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { cn } from "@/lib/utils.ts";
import { motion } from "framer-motion";

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

  const [hovered, setHovered] = useState<string | null>();

  return (
    <section
      className={
        "fixed top-0 z-50 w-full overflow-hidden border-b border-dotted border-b-amber-800 bg-transparent backdrop-blur dark:border-b-gray-800"
      }>
      <div className="container flex h-[4rem] w-full items-center justify-between py-4 xs:px-4 sm:px-8">
        <Link to={"/"} className="flex animate-pulse cursor-pointer items-center">
          <img src={"/logo.webp"} className="mr-2 h-8 w-10 rounded-lg" alt={"Body Works logo"} />
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
                  cn(
                    "flex cursor-pointer items-center gap-x-2 transition-all duration-100 ease-linear",
                    isActive ? "text-amber-700 dark:text-pink-500" : "",
                  )
                }
                onMouseEnter={() => setHovered(navItem.title)}
                onMouseLeave={() => setHovered(null)}>
                {!showFullIcon && (
                  <>
                    <motion.div>
                      {navItem.title}
                      {hovered === navItem.title && (
                        <motion.div
                          className="h-0.5 bg-amber-700 dark:bg-pink-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{
                            delay: 0,
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        )}
        <div className="focus:outline-none">
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};
