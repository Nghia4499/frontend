import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark collapseExample_navbar bg-dark collapseExample-navbar-light"
      id="collapseExample-navbar"
    >
      <img src={logo} alt={"logo"} className="logo d-none d-lg-block" />
      <div className="container-fluid">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          fdprocessedid="9nfvu8"
        >
          <span className="fa fa-bars" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="collapseExample">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <NavLink to="/Home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Product" className="nav-link">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
