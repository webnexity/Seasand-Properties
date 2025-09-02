import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import ShreekhetraVihar1 from "./Pages/Projects/ShreekhetraVihar1";
import ShreekhetraVihar2 from "./Pages/Projects/ShreekhetraVihar2";
import ShreekhetraVihar3 from "./Pages/Projects/ShreekhetraVihar3";
import ShreekhetraVihar4 from "./Pages/Projects/ShreekhetraVihar4";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/projects/shreekhetra-vihar-4"
          element={<ShreekhetraVihar4 />}
        />
        <Route
          path="/projects/shreekhetra-vihar-1"
          element={<ShreekhetraVihar1 />}
        />
        <Route
          path="/projects/shreekhetra-vihar-2"
          element={<ShreekhetraVihar2 />}
        />
        <Route
          path="/projects/shreekhetra-vihar-3"
          element={<ShreekhetraVihar3 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
