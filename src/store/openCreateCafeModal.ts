import { create } from "zustand";

interface modalStateI {
  showsCreateModal: boolean;
  openCreateCafeModal: () => void;
  closeCreateCafeModal: () => void;
}

const useCreateModalStore = create<modalStateI>((set: any) => ({
  showsCreateModal: false,
  openCreateCafeModal: () => set({ showsCreateModal: true }),
  closeCreateCafeModal: () => set({ showsCreateModal: false }),
}));

export default useCreateModalStore;
