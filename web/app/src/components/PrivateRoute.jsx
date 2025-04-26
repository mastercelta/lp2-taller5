import React, {useContext, useState} from "react";
import {Navigate} from "react-router";
import {AuthContext} from "./AuthContext";
import PopUp from "./PopUp";

const PrivateRoute = ({children}) => {
  const [popUp, setPopUp] = useState(true);
  const {isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? (
    children
  ) : (
    <>
      {popUp && (
        <PopUp
          onClose={() => setPopUp(false)}
          onContinue={() => (window.location.href = "/login")}
          message="Necesitas iniciar sesión para acceder a esta ruta"
        />
      )}
    </>
  );
};

export default PrivateRoute;
