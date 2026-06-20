import ReactDOM from "react-dom/client";

import "./index.css";
import "remixicon/fonts/remixicon.css";

import HomeContent from "./components/HomeContent";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import PDPContent from "pdp/PDPContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomeContent />} />
//         {/* <Route path="product/:id" element={<PDPContent />} /> */}
//         {/* <Route path="product/:id" element={<PDPContent />} /> */}
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
