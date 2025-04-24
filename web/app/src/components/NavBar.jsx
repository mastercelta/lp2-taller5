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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand" href="#!">
          <strong>{user}</strong>
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
              <button
                className="btn btn-light me-2"
                aria-current="page"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/profile");
                }}
              >
                Perfil
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-light me-2"
                aria-current="page"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/blog/page/1");
                }}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                className="btn btn-warning me-2"
                id="button-search"
                type="button"
                onClick={() => navigate("/new_post")}
              >
                Nueva publicación
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={logout}>
                Cerrar sesión
              </button>
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
