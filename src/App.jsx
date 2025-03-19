import React from "react";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div>
        <Header />
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