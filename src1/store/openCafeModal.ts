import { create } from "zustand";

interface modalStateI {
  showsCafeModal: boolean;
  modalType: string;
  setModalType: (key: string) => void;
  openCafeModal: () => void;
  closeCafeModal: () => void;
}

const useCafeModalStore = create<modalStateI>((set: any) => ({
  showsCafeModal: false,
  modalType: "",
  setModalType: (newModalType) => set({ modalType: newModalType }),
  openCafeModal: () => set({ showsCafeModal: true }),
  closeCafeModal: () => set({ showsCafeModal: false }),
}));

export default useCafeModalStore;
