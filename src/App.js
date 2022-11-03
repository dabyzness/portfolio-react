// Modules
import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectDetails" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
