import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Register from "./components/Register";
import Login from "./components/Login";
import NewsSingle from "./components/NewsSingle";
import CourseSingle from "./components/CourseSingle";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news-single" element={<NewsSingle />} />
          <Route path="/course-single" element={<CourseSingle/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
