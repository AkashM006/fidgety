export const mfConfig = {
  name: "home",
  entry: "http://localhost:5000/mf-manifest.json",
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
  },
  shared: ["react", "react-dom"],
};
