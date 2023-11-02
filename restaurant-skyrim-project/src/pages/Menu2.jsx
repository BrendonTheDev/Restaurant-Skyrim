import horker from "../assets/horkerStew.jpg";
import slaughterFish from "../assets/slaughterFish.jpeg";
import skeever from "../assets/charredSkeever.jpg";
import "./MenuTwo.css";

function Menutwo() {
  return (
    <div className="container align-items-center justify-content-center">
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top" src={horker} alt="" />
            <div className="card-body">
              <h5 className="card-title">Horker Stew</h5>
              <p className="card-text">
                Let Me Guess; Someone Stole Your Sweetroll?
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top" src={slaughterFish} alt="" />
            <div className="card-body">
              <h5 className="card-title">Seared Slaughterfish</h5>
              <p className="card-text">
                Let Me Guess; Someone Stole Your Sweetroll?
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top" src={skeever} alt="" />
            <div className="card-body">
              <h5 className="card-title">Charred Skeever</h5>
              <p className="card-text">
                Let Me Guess; Someone Stole Your Sweetroll?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row"></div> */}
    </div>
  );
}

export default Menutwo;
