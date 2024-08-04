import { create } from "zustand";

interface modalStateI {
  showsReviewModal: boolean;
  openReviewModal: () => void;
  closeReviewModal: () => void;
}

const useReviewModalStore = create<modalStateI>((set: any) => ({
  showsReviewModal: false,
  openReviewModal: () => set({ showsReviewModal: true }),
  closeReviewModal: () => set({ showsReviewModal: false }),
}));

export default useReviewModalStore;
