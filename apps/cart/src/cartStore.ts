import { create } from "zustand";

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

export type CartStore = {
  cartItems: CartItem[] | undefined;
  setCart: (items: CartItem[]) => void;
};

export const useCartStore = create<CartStore>()((set) => ({
  cartItems: undefined,
  setCart: (items: CartItem[]) => {
    set({
      cartItems: items,
    });
  },
}));

export const useCart = () => useCartStore((state) => state.cartItems);
