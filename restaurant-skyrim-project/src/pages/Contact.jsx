import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section className="wrapper">
        <header className="masthead-contact">
          <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div id="pidgeon" className="img-container"></div>
            <div className="d-flex justify-content-center contacts">
              <div className="text-center">
                <h1 className="heading mx-auto my-0 text-uppercase">
                  Contact Us!
                </h1>
                <div className="hours">
                  <p>
                    <b>Thursday</b> | 11AM - 8PM
                  </p>
                  <p>
                    <b>Friday</b> | 11AM - 9PM
                  </p>
                  <p>
                    <b>Saturday</b> | 11AM - 10PM
                  </p>
                  <p>
                    <b>Sunday</b> | Brunch 11AM - 3PM
                  </p>
                  <p>
                    <b>ADDRESS</b> | Top of the hill, WhiteRun, Skyrim
                  </p>
                  <p>
                    <b>TELEPHONE</b> | Carrier Pidgeon or Illusion Spell
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Contact;
