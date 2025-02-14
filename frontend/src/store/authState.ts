import { create } from "zustand";

interface AuthPopupState {
  isVisible: boolean;
  isSignin: boolean;
  openPopup: (isSignin: boolean) => void;
  closePopup: () => void;
  togglePopup: () => void;
}

export const useAuthStore = create<AuthPopupState>((set) => ({
  isVisible: false,
  isSignin: true,
  openPopup: (isSignin) => set({ isVisible: true, isSignin }),
  closePopup: () => set({ isVisible: false }),
  togglePopup: () => set((state) => ({ isVisible: !state.isVisible })),
}));
