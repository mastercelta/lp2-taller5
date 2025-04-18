/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router";
import {AuthContext} from "./AuthContext";

// eslint-disable-next-line react/prop-types, no-unused-vars
const NavBar = ({user}) => {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand" href="#!">
          {user}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/profile");
                }}
              >
                profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/blog/page/1");
                }}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" onClick={logout}>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
