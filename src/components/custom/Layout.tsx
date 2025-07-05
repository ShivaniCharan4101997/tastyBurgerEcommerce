import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Push content down by height of Header (h-20 = 80px) */}
      <main className="flex-grow mt-28">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
