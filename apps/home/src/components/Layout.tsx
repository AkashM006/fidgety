import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
