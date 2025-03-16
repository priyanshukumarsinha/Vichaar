import { create } from "zustand";
import authHandler from "../handlers/authHandler";
const user = authHandler();

export interface User {
    name?: string;
    email?: string;
    id?: string;
    username?: string;
    bio ?: string;
    pronouns ?: string;
}

interface isAuthState {
    isAuth: boolean;
    user: User;
    setIsAuth: (isAuth: boolean) => void;
    setUser: (user: User) => void;
}

export const useIsAuthStore = create<isAuthState>((set) => ({
    isAuth: Object.keys(user).length > 0 ? true : false,
    user: user,
    setIsAuth: (isAuth: boolean) => set({ isAuth }),
    setUser: (user: User) => set({ user })
}));