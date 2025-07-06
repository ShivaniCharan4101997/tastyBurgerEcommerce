import { Routes, Route } from "react-router-dom";
import Layout from "./components/custom/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlog from "./pages/AddBlog";
import BlogPost from "./pages/blogs/BlogPost";
import Blog from "./pages/blogs/Blog";
import Aboutus from "./pages/Aboutus";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
