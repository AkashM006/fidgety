import ReactDOM from "react-dom/client";

import "./index.css";
import "remixicon/fonts/remixicon.css";

import HomeContent from "./components/HomeContent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <HomeContent />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
