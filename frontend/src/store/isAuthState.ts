import { create } from "zustand";

interface isAuthState{
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

export const useIsAuthStore = create<isAuthState>((set) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set({isAuth})
}))