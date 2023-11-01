import React from "react";
import MusicPlayer from "./Music";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            The Bannered Mare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link tabs active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link tabs" href="#">
                Menu
              </a>
              <a className="nav-link tabs" href="#">
                Contact
              </a>
              <MusicPlayer />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
