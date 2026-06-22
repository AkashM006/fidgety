import ReactDOM from "react-dom/client";
import "./index.css";

import "remixicon/fonts/remixicon.css";

import CartContent from "./components/CartContent";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <div className="my-10">
      <CartContent />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
