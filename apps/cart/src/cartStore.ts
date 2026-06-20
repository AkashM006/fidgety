import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

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

type Cart = {
  cartItems: CartItem[];
};

export const cart = new BehaviorSubject<Cart | null>(null);
