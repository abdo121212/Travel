import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import BlogsDetails from "./Components/BlogsDetails";
import PlaceRoute from "./Components/PlaceRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/Blogs/:id" element={<BlogsDetails />} />
            <Route path="/Place" element={<PlaceRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
