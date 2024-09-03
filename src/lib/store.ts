import { create } from "zustand";

interface SidebarStoreProps {
  collapsed: boolean;
  onCollapse: () => void;
  onExpanded: () => void;
}

export const useSidebarStore = create<SidebarStoreProps>((set) => ({
  collapsed: false,
  onCollapse: () =>
    set(
      (): {
        collapsed: boolean;
      } => ({ collapsed: true }),
    ),
  onExpanded: () =>
    set((): { collapsed: boolean } => ({
      collapsed: false,
    })),
}));
