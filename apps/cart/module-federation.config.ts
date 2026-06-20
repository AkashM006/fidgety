export const mfConfig = {
  name: "cart",
  exposes: {
    "./cart": "./src/cart.ts",
    "./Login": "./src/components/Login.tsx",
    "./MiniCart": "./src/components/MiniCart.tsx",
    // "./hooks": "./src/hooks.tsx",
    "./cartStore": "./src/cartStore.ts",
    "./authStore": "./src/authStore.ts",
  },
  remotes: {
    home: "home@http://localhost:5000/mf-manifest.json",
    // pdp: "pdp@http://localhost:5001/mf-manifest.json",
    // cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    zustand: {
      singleton: true,
    },
    "./src/cartStore.ts": {
      singleton: true,
    },
    "./src/authStore.ts": {
      singleton: true,
    },
  },
};
