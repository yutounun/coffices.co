import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

interface langState {
  lang: string;
  changeToJp: () => void;
  changeToEng: () => void;
}

const useLangStore = create<langState, [["zustand/persist", unknown]]>(
  persist(
    (set: any) => ({
      lang: "en",
      changeToJp: () => set({ lang: "ja" }),
      changeToEng: () => set({ lang: "en" }),
    }),
    {
      name: "lang-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLangStore;
