import React, { useState } from "react";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Working from "./components/Working";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

function App() {

  let [theme, setTheme] = useState('light');

  return (
    <>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Working theme={theme} />
      <Experience theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default App;