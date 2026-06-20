export const mfConfig = {
  name: "home",
  entry: "http://localhost:5000/mf-manifest.json",
  remotes: {
    cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./products": "./src/products.ts",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    "cart/cartStore": {
      singleton: true,
    },
    "cart/authStore": {
      singleton: true,
    },
  },
};
