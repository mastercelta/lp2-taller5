import React, {useContext} from "react";
import {Navigate} from "react-router";
import {AuthContext} from "./AuthContext";

const PrivateRoute = ({children}) => {
  const {isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
