import { create } from "zustand";

interface openCreateModalState {
  showsCreateModal: boolean;
  openCreateCafeModal: () => void;
  closeCreateCafeModal: () => void;
}

const useCreateModalStore = create<openCreateModalState>((set: any) => ({
  showsCreateModal: false,
  openCreateCafeModal: () => set({ showsCreateModal: true }),
  closeCreateCafeModal: () => set({ showsCreateModal: false }),
}));

export default useCreateModalStore;
