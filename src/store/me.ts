import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface userI {
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

interface userState {
  user: userI;
  setUser: (user: userI) => void;
}

const userStore = create<userState, [["zustand/persist", unknown]]>(
  persist(
    (set: (f: (state: userState) => userState) => void) => ({
      user: {
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
      setUser: (newMe: userI) => set((state) => ({ ...state, user: newMe })),
    }),
    {
      name: "me-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default userStore;
