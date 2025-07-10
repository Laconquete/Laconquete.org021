import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/HomeUpdated";
import About from "./pages/About";
import ActivitiesDepartments from "./pages/ActivitiesDepartments";
import Media from "./pages/Media";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<ActivitiesDepartments />} />
              <Route path="/departments" element={<ActivitiesDepartments />} />
              <Route path="/media" element={<Media />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;