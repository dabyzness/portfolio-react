// Modules
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// CSS
import "./App.css";
// Components
import NavBar from "./components/NavBar/NavBar";
// Pages
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  const [isBottom, setIsBottom] = useState(false);
  console.log(scrollPos);
  console.log("weep weep", window.innerHeight);
  console.log(`scrolly wolly`, document.body.scrollHeight);

  window.addEventListener("scroll", updatePosition);

  function updatePosition() {
    setScrollPos(window.scrollY);
  }

  useEffect(() => {
    if (window.innerHeight - scrollPos < window.innerHeight * 0.33) {
      setShow(true);
    } else {
      setShow(false);
    }

    if (scrollPos > 1790) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }, [scrollPos]);

  return (
    <>
      <NavBar show={show} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectDetails" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer isBottom={isBottom} />
    </>
  );
}

export default App;
