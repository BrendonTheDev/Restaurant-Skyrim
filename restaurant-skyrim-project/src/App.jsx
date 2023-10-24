import { useState } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
