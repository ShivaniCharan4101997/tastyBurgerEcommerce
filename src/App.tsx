import { Routes, Route } from "react-router-dom";
import Layout from "./components/custom/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
