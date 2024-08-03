import { create } from "zustand";

interface modalStateI {
  showsCafeModal: boolean;
  openCafeModal: () => void;
  closeCafeModal: () => void;
}

const useCafeModalStore = create<modalStateI>((set: any) => ({
  showsCafeModal: false,
  openCafeModal: () => set({ showsCafeModal: true }),
  closeCafeModal: () => set({ showsCafeModal: false }),
}));

export default useCafeModalStore;
