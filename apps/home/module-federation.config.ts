export const mfConfig = {
  name: "home",
  entry: "http://localhost:5000/mf-manifest.json",
  remotes: {
    // pdp: "pdp@http://localhost:5001/mf-manifest.json",
    cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./products": "./src/products.ts",
    "./HomeContent": "./src/components/HomeContent.tsx",
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
    "react-router": {
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
