import React from "react";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Toaster />
      <div>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;