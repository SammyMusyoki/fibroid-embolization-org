import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQS from "./Pages/FAQS";
import Donations from "./Pages/Donations";
import Gallery from "./Pages/Gallery";
import TestimonialPage from "./Pages/Testimonials";
import FibroidsInfo from "./Pages/FibroidsInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="frequently-asked-questions" element={<FAQS />} />
      <Route path="/testimonial/:id" element={<TestimonialPage />} />
      <Route path="/fibroids-info" element={<FibroidsInfo />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="make-a-donation" element={<Donations />} />
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
