import { NavLink } from "react-router-dom";
import "./managersApp.scss";
import lap from "./lap.png";
import chPlay from "./chPlay.png";
import appStore from "./appStore.png";

const ManagersApp = () => {
  return (
    <div className="managersApp row justify-content-center">
      <div className="col-12 col-lg-7">
        <img src={lap} className="lap" alt="..." />
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
        <h4 className="title">Apps for Managers</h4>
        <p>
          Each branch of service provides is independent of the other business
          areas, but the activities of the services will be reported to senior
          management of the company that owns the application.
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

export default ManagersApp;
