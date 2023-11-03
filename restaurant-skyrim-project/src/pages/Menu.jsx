import "./Menu.css";
import horker from "../assets/horkerStew.jpg";

function Menu() {
  return (
    <div className="cards">
      <div className="card">
        <div id="horker" className="img-container"></div>
        <div className="card-body">
          <h3 className="card-title">Horker Stew</h3>
          <h5 className="card-text">
            "Let Me Guess; Someone Stole Your Sweetroll?"
          </h5>
        </div>
      </div>
      <div className="card">
        <div id="seared" className="img-container"></div>
        <div className="card-body">
          <h3 className="card-title">Seared Slaughterfish</h3>
          <h5 className="card-text">
            "Let Me Guess; Someone Stole Your Sweetroll?"
          </h5>
        </div>
      </div>
      <div className="card">
        <div id="skeever" className="img-container"></div>
        <div className="card-body">
          <h3 className="card-title">Charred Skeever</h3>
          <h5 className="card-text">
            "Let Me Guess; Someone Stole Your Sweetroll?"
          </h5>
        </div>
      </div>
      <div className="card">
        <div id="crab" className="img-container"></div>
        <div className="card-body">
          <h3 className="card-title">Steamed Mudcrab</h3>
          <h5 className="card-text h">
            "Let Me Guess; Someone Stole Your Sweetroll?"
          </h5>
        </div>
      </div>
      <div className="card">
        <div id="cheese" className="img-container"></div>
        <div className="card-body">
          <h3 className="card-title">Eldar Cheese Wheel</h3>
          <h5 className="card-text">
            "Let Me Guess; Someone Stole Your Sweetroll?"
          </h5>
        </div>
      </div>
      <div className="card">
        <img src="" alt="" />
        <div id="sweetroll" className="img-container"></div>
        <div className="card-body">
          <h3 className="card-title">Sweet Roll</h3>
          <h5 className="card-text">
            "Let Me Guess; Someone Stole Your Sweetroll?"
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Menu;
