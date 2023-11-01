import "./Home.css";
import React from "react";

function Home() {
  return (
    <div>
      <section className="wrapper">
        <header className="masthead">
          <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <h1 className="heading mx-auto my-0 text-uppercase">
                  The Bannered Mare
                </h1>
                <h2 className=" mx-auto mt-2 mb-5 sub-header">
                  An unforgettable dining experience.
                </h2>
                <div className="btn-container">
                  <button className="btn-17">View Menu</button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Home;
