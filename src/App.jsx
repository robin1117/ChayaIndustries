import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Swipers from "./components/Swipers";
import CssBaseline from "@mui/material/CssBaseline";
const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Swipers />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
