import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Embers from "./pages/Embers";
import "./App.css";

import "./fonts/DorovarflfCarolus-axyg.ttf";

function App() {
  return (
    <>
      <Navbar />
      {/* <Menu /> */}
      <Home />
      {/* <Contact /> */}
      <Embers />
    </>
  );
}

export default App;
