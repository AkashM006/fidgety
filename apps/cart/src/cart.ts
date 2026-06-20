import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Cart = {
  cartItems: CartItem[];
};

export const jwt = new BehaviorSubject(null);
export const cart = new BehaviorSubject<Cart | null>(null);

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
      jwt.next(data.access_token);
      getCart();
      return data.access_token;
    });
};

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState<boolean>(!!jwt.value);

  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return loggedIn;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>([]);

  useEffect(() => {
    setCartItems(cart.value?.cartItems);
    const subscription = cart.subscribe((c) => {
      setCartItems(c?.cartItems);
    });

    return () => {
      subscription.unsubscribe();
    };
  });

  return cartItems;
};

export const getCart = () =>
  fetch(`${API_SERVER}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      cart.next(res);
      return res;
    });

export const addToCart = (id: string | number) =>
  fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });

export const clearCart = () =>
  fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.value}`,
    },
  })
    .then((res) => res.json())
    .then(() => {
      getCart();
    });
