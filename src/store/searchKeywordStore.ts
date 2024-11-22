import { create } from "zustand";
import { persist } from "zustand/middleware";

interface searchKeywordStoreStateI {
  searchKeyword: string;
  setSearchKeyword: (store: string) => void;
}

const useSearchKeywordStore = create<searchKeywordStoreStateI>()(
  persist(
    (set) => ({
      searchKeyword: "",
      setSearchKeyword: (data) => set({ searchKeyword: data }),
    }),
    {
      name: "selected-store", // Unique name for local storage key
    }
  )
);

export default useSearchKeywordStore;
