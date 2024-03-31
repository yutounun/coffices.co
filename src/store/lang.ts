import create from "zustand";

interface langState {
  lang: string;
  changeToJp: () => void;
  changeToEng: () => void;
}

const useLangStore = create<langState>((set: any) => ({
  lang: "jp",
  changeToJp: () => set({ lang: "jp" }),
  changeToEng: () => set({ lang: "eng" }),
}));

export default useLangStore;
