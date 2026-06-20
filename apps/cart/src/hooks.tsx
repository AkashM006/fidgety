import { useAuthStore } from "./authStore";

export const useLoggedIn = () => {
  const jwt = useAuthStore((state) => state.jwt);

  return !!jwt;
};
