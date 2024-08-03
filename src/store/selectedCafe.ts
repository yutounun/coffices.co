import { CafeI } from "@/types/cafes";
import { create } from "zustand";

interface selectedCafeStateI {
  selectedCafe: CafeI | null;
  addInitialCafeData: (cafe: CafeI) => void;
}

const useSelectedCafeStore = create<selectedCafeStateI>((set) => ({
  selectedCafe: null,
  addInitialCafeData: (data: CafeI) => set({ selectedCafe: data }),
}));

export default useSelectedCafeStore;
