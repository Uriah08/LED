import { create } from "zustand";

type SidebarState = {
  isHidden: boolean;
  showSidebar: () => void;
  hideSidebar: () => void;
  toggleSidebar: () => void;
};

export const useHideSidebar = create<SidebarState>((set) => ({
  isHidden: false,
  showSidebar: () => set({ isHidden: false }),
  hideSidebar: () => set({ isHidden: true }),
  toggleSidebar: () => set((state) => ({ isHidden: !state.isHidden })),
}));

