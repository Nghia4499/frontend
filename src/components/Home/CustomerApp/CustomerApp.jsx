import { NavLink } from "react-router-dom";
import "./customerApp.scss";
import phone from "./phone.png";
import chPlay from "./chPlay.png";
import appStore from "./appStore.png";

const CustomerApp = () => {
  return (
    <div className="customerApp row justify-content-center">
      <div className="col col-lg-5">
        <img src={phone} className="phone1" alt="..." />
        <img src={phone} className="phone2" alt="..." />
      </div>
      <div className="col col-lg-4 d-flex flex-column justify-content-center">
        <h4 className="title">Apps for customers</h4>
        <p>
          The general idea behind "diversification" is to provide a Service
          ecosystem that fully caters to all customer needs from the smallest
          needs
        </p>
        <div className="">
          <img className="app" src={chPlay} alt="..." />
          <img className="app" src={appStore} alt="..." />
        </div>
        <NavLink to="/">See more</NavLink>
      </div>
    </div>
  );
};

export default CustomerApp;
