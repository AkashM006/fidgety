export const mfConfig = {
  name: "pdp",
  remotes: {
    home: "home@http://localhost:5000/mf-manifest.json",
  },
  exposes: {
    cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  shared: ["react", "react-dom"],
};
