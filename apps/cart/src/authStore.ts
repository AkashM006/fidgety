import { create } from "zustand";

export type AuthStore = {
  jwt: string | null;
  login: (jwt: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  jwt: null,
  login: (jwt) => {
    set({ jwt });
  },
  logout: () => set({ jwt: null }),
}));

export const useLoggedIn = () => !!useAuthStore((state) => state.jwt);
