import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import "./App.css";

import "./fonts/DorovarflfCarolus-axyg.ttf";

function App() {
  return (
    <>
      <Navbar />
      {/* <Menu /> */}
      <Home />
    </>
  );
}

export default App;
