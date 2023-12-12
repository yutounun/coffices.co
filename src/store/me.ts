import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface meI {
  sessionId: string;
  username: string;
  email: string;
  isAdmin: boolean;
  bio: string;
  createdAt: string;
  updatedAt: string;
}
interface meState {
  me: meI;
  setMe: (me: meI) => void;
}

const useCreateModalStore = create<meState>(
  persist(
    (set: any) => ({
      me: {
        sessionId: "",
        username: "",
        email: "",
        isAdmin: false,
        bio: "",
        createdAt: "",
        updatedAt: "",
      },
      setMe: (me: meI) => set({ me: me }),
    }),
    {
      name: "me-storage",
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useCreateModalStore;
