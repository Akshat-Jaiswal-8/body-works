import React from "react";
import { CgGym } from "react-icons/cg";
import { GiMuscleUp } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface SidebarLinkProps {
  to: string;
  icon: IconType;
  label: string;
}
const SidebarLink = ({ to, icon: Icon, label }: SidebarLinkProps): React.ReactNode => (
  <li className="group w-full">
    <Link
      to={to}
      className="flex w-full items-center gap-4 rounded-lg px-8 py-4 font-semibold text-gray-900 transition-all duration-300 group-hover:text-light-primary-hover-color dark:text-gray-300 dark:group-hover:text-pink-500">
      <Icon />
      <span className="font-poppins text-gray-900 transition-all duration-300 group-hover:text-light-primary-hover-color dark:text-gray-300 dark:group-hover:text-pink-500">
        {label}
      </span>
    </Link>
  </li>
);

function Sidebar() {
  const { collapsed, onExpanded, onCollapse } = useSidebarStore();

  return (
    <>
      <aside
        className={cn(
          "fixed h-svh border-r border-dotted border-border-light-primary-color transition-all duration-100 dark:border-gray-700 xs:hidden lg:block",
          collapsed ? "w-[5rem]" : "w-[20rem]",
        )}>
        <div className={cn("m-2", collapsed ? "text-center" : "text-end")}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {!collapsed ? (
                  <Button onClick={collapsed ? onExpanded : onCollapse} variant="ghost">
                    <ArrowLeftFromLine />
                  </Button>
                ) : (
                  <Button onClick={collapsed ? onExpanded : onCollapse} variant="ghost">
                    <ArrowRightFromLine />
                  </Button>
                )}
              </TooltipTrigger>
              <TooltipContent className="dark:bg-white dark:text-black" side="right">
                <p>Collapse</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {!collapsed && (
          <div className="flex flex-col items-center gap-6 px-6">
            <nav className="block w-full">
              <ul className="flex cursor-pointer flex-col items-center gap-6">
                <SidebarLink to={"/equipments"} icon={CgGym} label="Equipments" />
                <SidebarLink to={"/target-muscle"} icon={GiMuscleUp} label="Target Muscle" />
                <SidebarLink to={"/body-parts"} icon={IoBody} label="Body Parts" />
                <SidebarLink to={"/routine-category"} icon={IoBody} label="Routine Category" />
              </ul>
            </nav>
          </div>
        )}
      </aside>
    </>
  );
}

export default Sidebar;
