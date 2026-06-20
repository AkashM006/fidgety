export const mfConfig = {
  name: "pdp",
  remotes: {
    home: "home@http://localhost:5000/mf-manifest.json",
    cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  exposes: {},
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
    "cart/cartStore": {
      singleton: true,
    },
    "cart/authStore": {
      singleton: true,
    },
  },
};
