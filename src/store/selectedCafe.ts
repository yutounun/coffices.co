import { CafeI } from "@/types/CafeList";
import { create } from "zustand";

interface selectedCafeStateI {
  selectedCafe: CafeI | null;
  setSelectedCafeData: (cafe: CafeI) => void;
}

const useSelectedCafeStore = create<selectedCafeStateI>((set) => ({
  selectedCafe: null,
  setSelectedCafeData: (data: CafeI) => set({ selectedCafe: data }),
}));

export default useSelectedCafeStore;
