import ReactDOM from "react-dom/client";
import "./index.css";

import PDPContent from "./PDPContent";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="product/:id" element={<PDPContent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
