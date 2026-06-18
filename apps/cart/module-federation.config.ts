export const mfConfig = {
  name: "cart",
  exposes: {},
  remotes: {
    home: "home@http://localhost:5000/mf-manifest.json",
    // pdp: "pdp@http://localhost:5001/mf-manifest.json",
    // cart: "cart@http://localhost:5002/mf-manifest.json",
  },
  shared: ["react", "react-dom"],
};
