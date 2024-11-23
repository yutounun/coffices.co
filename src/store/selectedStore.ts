import { create } from "zustand";
import { persist } from "zustand/middleware";

export type selectedCafeDetailI = {
  id: string;
  name: string;
  address: string;
  isOpen?: boolean;
  photoRef?: string;
} | null;

interface selectedStoreStateI {
  selectedStoreData: selectedCafeDetailI;
  setSelectedStoreData: (store: selectedCafeDetailI) => void;
}

const useSelectedStoreStore = create<selectedStoreStateI>()(
  persist(
    (set) => ({
      selectedStoreData: null,
      setSelectedStoreData: (data) => set({ selectedStoreData: data }),
    }),
    {
      name: "selected-store", // Unique name for local storage key
    }
  )
);

export default useSelectedStoreStore;
