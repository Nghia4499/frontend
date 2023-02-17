import { NavLink } from "react-router-dom";
import "./businessApp.scss";
import phone from "./phone.png";
import chPlay from "./chPlay.png";
import appStore from "./appStore.png";

const BusinessApp = () => {
  return (
    <div className="businessApp row justify-content-center">
      <div className="col col-lg-4 d-flex flex-column justify-content-center">
        <h4 className="title">Apps for Business</h4>
        <p>
          One of the advantages of Multi-Industry Services is that it helps
          reduce the impact of unexpected fluctuations in any one industry.
          Bringing diverse consumers to businesses
        </p>
        <div className="">
          <img className="app" src={chPlay} alt="..." />
          <img className="app" src={appStore} alt="..." />
        </div>
        <NavLink to="/">See more</NavLink>
      </div>
      <div className="col col-lg-5">
        <img src={phone} className="phone1" alt="..." />
        <img src={phone} className="phone2" alt="..." />
      </div>
    </div>
  );
};

export default BusinessApp;
