import "./Menu.css";

function Menu() {
  return (
    <div className="cards">
      <div className="card">
        <div id="horker" className="card-img-top"></div>
        <div className="card-body">
          <h3 className="card-title">Horker Stew</h3>
          <h5 className="card-text">The Finest Horker Stew</h5>
        </div>
      </div>
      <div className="card">
        <div id="seared" className="card-img-top"></div>
        <div className="card-body">
          <h3 className="card-title">Seared Slaughterfish</h3>
          <h5 className="card-text">
            Just Keep Swimming... Just Keep Swimming.
          </h5>
        </div>
      </div>
      <div className="card">
        <div id="skeever" className="card-img-top"></div>
        <div className="card-body">
          <h3 className="card-title">Charred Skeever</h3>
          <h5 className="card-text">Sorry, Master Splinter.</h5>
        </div>
      </div>
      <div className="card">
        <div id="crab" className="card-img-top"></div>
        <div className="card-body">
          <h3 className="card-title">Steamed Mudcrab</h3>
          <h5 className="card-text h">
            "I saw a mudcrab the other day. Horrible Creatures."
          </h5>
        </div>
      </div>
      <div className="card">
        <div id="cheese" className="card-img-top"></div>
        <div className="card-body">
          <h3 className="card-title">Eldar Cheese Wheel</h3>
          <h5 className="card-text">How dairy not like these cheese puns?</h5>
        </div>
      </div>
      <div className="card">
        <img src="" alt="" />
        <div id="sweetroll" className="card-img-top"></div>
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
