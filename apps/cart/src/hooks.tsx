import { useEffect, useState } from "react";
import { jwt } from "./authStore";
import { cart, CartItem } from "./cartStore";

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
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
};

export const useCart = () => {
  const [items, setItems] = useState<CartItem[] | undefined>(undefined);

  useEffect(() => {
    const subscription = cart.subscribe((value) => setItems(value?.cartItems));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return items;
};
