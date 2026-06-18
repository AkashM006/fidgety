import Footer from "home/Footer";
import Header from "home/Header";
import { Outlet } from "react-router";

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
