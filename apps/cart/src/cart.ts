import { useAuthStore } from "./authStore";
import { CartItem, useCartStore } from "./cartStore";

const API_SERVER = "http://localhost:8080";

export type Cart = {
  cartItems: CartItem[];
};

export const login = (username: string, password: string) => {
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      useAuthStore.getState().login(data.access_token);
      // jwt.next(data.access_token);
      getCart();
      return data.access_token;
    });
};

export const getCart = () => {
  const jwt = useAuthStore.getState().jwt;
  fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${jwt.value}`,
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      useCartStore.getState().setCart(res.cartItems);
      // cart.next(res);
      return res;
    });
};

export const addToCart = (id: string | number) => {
  const jwt = useAuthStore.getState().jwt;
  fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${jwt.value}`,
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });
};

export const clearCart = () => {
  const jwt = useAuthStore.getState().jwt;
  fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });
};
