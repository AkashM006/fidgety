import ReactDOM from "react-dom/client";
import "./index.css";

import "remixicon/fonts/remixicon.css";

import PDPContent from "./components/PDPContent";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="" element={<HomeContent />} />
        <Route path="product/:id" element={<PDPContent />} />
        <Route path="cart" element={<CartContent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
