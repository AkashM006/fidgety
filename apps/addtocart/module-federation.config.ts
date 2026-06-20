export const mfConfig = {
  name: "addtocart",
  exposes: {},
  remotes: {
    cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  shared: {
    "solid-js": {
      singleton: true,
    },
  },
};
