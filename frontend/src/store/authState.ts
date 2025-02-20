import { create } from "zustand";

interface AuthPopupState {
  isVisible: boolean;
  isSignin: boolean;
  isSignupwithEmail: boolean;
  isSigninwithEmail: boolean;
  openPopup: (isSignin: boolean) => void;
  closePopup: () => void;
  togglePopup: () => void;
  openSignupWithEmail: () => void;
  openSigninWithEmail: () => void;
}

export const useAuthStore = create<AuthPopupState>((set) => ({
  isVisible: false,
  isSignin: true,
  isSignupwithEmail: false,
  isSigninwithEmail: false,

  openPopup: (isSignin) =>
    set({
      isVisible: true,
      isSignin,
      isSignupwithEmail: false, // Reset
      isSigninwithEmail: false, // Reset
    }),

  closePopup: () =>
    set({
      isVisible: false,
      isSignupwithEmail: false,
      isSigninwithEmail: false,
    }),

  togglePopup: () =>
    set((state) => ({
      isVisible: !state.isVisible,
      isSignupwithEmail: false, // Ensure reset
      isSigninwithEmail: false, // Ensure reset
    })),

  openSignupWithEmail: () =>
    set({
      isSignupwithEmail: true,
      isSigninwithEmail: false, // Ensure only one is active
    }),

  openSigninWithEmail: () =>
    set({
      isSigninwithEmail: true,
      isSignupwithEmail: false, // Ensure only one is active
    }),
}));
