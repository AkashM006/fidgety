import React, { useEffect, useState } from "react";
import { jwt, login } from "../cart";

const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    login("sally", "123");
    const subscription = jwt.subscribe((val) => setToken(val ?? ""));

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <div>JWT: {token}</div>;
};

export default CartContent;
