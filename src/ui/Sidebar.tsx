import React from "react";
import { CgGym } from "react-icons/cg";
import { GiMuscleUp } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useSidebarStore } from "@/lib/store.ts";
import { cn } from "@/lib/utils.ts";

function Sidebar(): React.JSX.Element {
  const {
    collapsed,
    onExpanded,
    onCollapse,
  }: {
    collapsed: boolean;
    onExpanded: () => void;
    onCollapse: () => void;
  } = useSidebarStore((state) => state);
  return (
    <aside
      className={cn(
        "sticky overflow-scroll border-r overflow-y-visible border-border-light-primary-color border-dotted dark:border-gray-700",
        collapsed ? "w-10" : "col-span-1",
      )}
    >
      <div className={"text-end md:mb-5"}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {collapsed ? (
                <Button onClick={() => onExpanded()} variant={"ghost"} asChild>
                  <ArrowRightFromLine />
                </Button>
              ) : (
                <Button onClick={() => onCollapse()} variant={"ghost"} asChild>
                  <ArrowLeftFromLine />
                </Button>
              )}
            </TooltipTrigger>
            <TooltipContent
              className={"dark:bg-white dark:text-black"}
              side={"right"}
            >
              {collapsed ? <p>Expand</p> : <p>Collapse</p>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        className={cn("flex flex-col px-6 gap-3 ", collapsed && "md:hidden")}
      >
        <div
          className={
            "shadow-lg shadow-amber-600 dark:shadow-pink-500 rounded-full h-50 w-50"
          }
        >
          <img
            loading="lazy"
            src={"/sidebar.webp"}
            className="rounded-full shadow dark:shadow-pink-500 dark:grayscale"
            alt="logo"
          />
        </div>
        <nav className="block">
          <ul className="cursor-pointer flex flex-col gap-6 items-center">
            <li className="w-full group">
              <Link
                to={"/equipments"}
                className="w-full px-8 py-4 text-gray-900 dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color  dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
              >
                <CgGym />
                <span className="dark:text-gray-300 font-poppins text-gray-900 group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300">
                  Equipments
                </span>
              </Link>
            </li>
            <li className="w-full group">
              <Link
                to={"/target-muscle"}
                className="w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
              >
                <GiMuscleUp />
                <span className="dark:text-gray-300 font-poppins text-gray-900 group-hover:text-[#8f3e00] dark:group-hover:text-pink-500 transition-all duration-300 ">
                  Target Muscle
                </span>
              </Link>
            </li>
            <li className="w-full group">
              <Link
                to={"/body-parts"}
                className="w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
              >
                <IoBody />
                <span className="dark:text-gray-300 text-gray-900 font-poppins group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300">
                  Body Parts
                </span>
              </Link>
            </li>
            <li className="w-full group">
              <Link
                to={"/routine-category"}
                className="w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
              >
                <IoBody />
                <span className="dark:text-gray-300 text-gray-900 font-poppins group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300">
                  Routine Category
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
export default Sidebar;
