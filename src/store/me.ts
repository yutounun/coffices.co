import { persist, createJSONStorage } from "zustand/middleware";

interface meI {
  _id: string;
  sessionId: string;
  username: string;
  email: string;
  isAdmin: boolean;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  github?: string;
  twitter?: string;
  linkedIn?: string;
  homepage?: string;
}

interface meState {
  me: meI;
  setMe: (me: meI) => void;
}

const useCreateModalStore = create<meState, [["zustand/persist", unknown]]>(
  persist(
    (set: (f: (state: meState) => meState) => void) => ({
      me: {
        sessionId: "",
        username: "",
        email: "",
        isAdmin: false,
        bio: "",
        createdAt: "",
        updatedAt: "",
        github: "",
        twitter: "",
        linkedIn: "",
        homepage: "",
        _id: "",
      },
      setMe: (newMe: meI) => set((state) => ({ ...state, me: newMe })),
    }),
    {
      name: "me-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCreateModalStore;
