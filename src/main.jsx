import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home1/Navbar/Navbar";
import Footer from "./Components/Home1/Footer/Footer";
import Footer2 from "./Components/Home1/Footer/Footer2";
import About from "./Components/Home1/About/About.jsx";
import Course from "./Components/Home1/Course/Course.jsx";
import FAQs from "./Components/Home1/FAQ/FAQs.jsx";
import Pricing from "./Components/Home1/Pricing/Pricing.jsx";
import Career from "./Components/Home1/Career/Career.jsx";
import Events from "./Components/Home1/Events/Events.jsx";
import Team from "./Components/Home1/Team/Team.jsx";
import Blog from "./Components/Home1/Blog/Blog.jsx";
import Contact from "./Components/Home1/Contact/Contact.jsx";
import Login from "./Components/Home1/Login/Login.jsx";
import Signup from "./Components/Home1/Signup/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <App />
            <Footer />
          </>
        }
      />
      <Route
        path="about"
        element={
          <>
            <About />
            <Footer2 />
          </>
        }
      />
      <Route
        path="course"
        element={
          <>
            <Course />
            <Footer />
          </>
        }
      />
      <Route
        path="faq"
        element={
          <>
            <FAQs />
            <Footer2 />
          </>
        }
      />
      <Route
        path="pricing"
        element={
          <>
            <Pricing />
            <Footer2 />
          </>
        }
      />
      <Route
        path="event"
        element={
          <>
            <Events />
            <Footer />
          </>
        }
      />
      <Route
        path="career"
        element={
          <>
            <Career />
            <Footer2 />
          </>
        }
      />
      <Route
        path="team"
        element={
          <>
            <Team />
            <Footer2 />
          </>
        }
      />
      <Route
        path="blog"
        element={
          <>
            <Blog />
            <Footer2 />
          </>
        }
      />
      <Route
        path="contact"
        element={
          <>
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
