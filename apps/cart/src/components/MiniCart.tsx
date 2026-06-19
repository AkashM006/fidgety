import React, { useEffect, useRef, useState } from "react";
import { Cart, cart, CartItem } from "../cart";

const MiniCart = () => {
  const [items, setItems] = useState<CartItem[] | undefined>(undefined);
  const [showCart, setShowCart] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    const subscription = cart.subscribe((c) => {
      setItems(c?.cartItems);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart((prev) => !prev)}>
        <i className="ri-shopping-cart-2-fill text-2xl"></i>
      </span>
    </>
  );
};

export default MiniCart;
