import { create } from "zustand";

type SnackbarType = "success" | "error" | "warning" | "info";

interface SnackbarState {
  showSnackbar: boolean;
  type: SnackbarType;
  message: string;
  openSnackbar: (type: SnackbarType, message: string) => void;
  closeSnackbar: () => void;
}

const useSnackbarStore = create<SnackbarState>((set) => ({
  showSnackbar: false,
  type: "info",
  message: "",
  openSnackbar: (type, message) => set({ showSnackbar: true, type, message }),
  closeSnackbar: () => set({ showSnackbar: false }),
}));

export default useSnackbarStore;
