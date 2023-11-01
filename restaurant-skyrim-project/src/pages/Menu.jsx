// import salmon from "../assets/salmon.mp4";

import "./Menu.css";

function Menu() {
  return (
    <div className="cards">
      <div className="card">
        <div id="horker" className="img-container"></div>
        <div className="card-body">
          <h5 className="card-title">Horker Stew</h5>
        </div>
      </div>
      <div className="card">
        <div id="seared" className="img-container"></div>
        <div className="card-body">
          <h5 className="card-title">Seared Slaughterfish</h5>
        </div>
      </div>
      <div className="card">
        <div id="skeever" className="img-container"></div>
        <div className="card-body">
          <h5 className="card-title">Charred Skeever</h5>
        </div>
      </div>
      <div className="card">
        <div id="crab" className="img-container"></div>
        <div className="card-body">
          <h5 className="card-title">Steamed Mudcrab</h5>
        </div>
      </div>
      <div className="card">
        <div id="cheese" className="img-container"></div>
        <div className="card-body">
          <h5 className="card-title">Eldar Cheese Wheel</h5>
        </div>
      </div>
      <div className="card">
        <div id="sweetroll" className="img-container"></div>
        <div className="card-body">
          <h5 className="card-title">Sweet Roll</h5>
          {/* <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
