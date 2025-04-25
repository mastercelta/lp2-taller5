import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar.jsx";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";
import usePut from "../customhook/usePut.js";
import useDelete from "../customhook/useDelete.js";
import PopUp from "../components/PopUp.jsx";

import Options from "../options.js";
import {AuthContext} from "../components/AuthContext.jsx";

const UserProfile = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));
  const {logout} = useContext(AuthContext);

  const [name, setName] = useState(currentUser.nombre);
  const [email, setEmail] = useState(currentUser.email);
  const [usuario, setUsuario] = useState(currentUser.usuario);
  const [showPopUp, setPopUp] = useState(false);
  // const [password, setPassword] = useState("");

  const URL = `http://localhost:8000/users`;

  const {putRequest} = usePut(URL);
  const {deleteData} = useDelete(URL);

  const options = new Options(storedToken);

  const newUser = {
    usuario,
    nombre: name,
    email,
    // password
  };

  const editUser = () => {
    putRequest(currentUser.id, newUser, options);
    logout();
  };

  const delUser = () => {
    deleteData(currentUser.id, options);
    logout();
  };

  return (
    <>
      <NavBar user={currentUser.usuario} />
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editUser();
              }}
            >
              <div className="mb-3">
                <TextInput
                  styles={"form-control"}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  placeholder={currentUser.nombre}
                />
              </div>
              <div className="mb-3">
                <TextInput
                  styles={"form-control"}
                  onChange={(e) => setUsuario(e.target.value)}
                  type="text"
                  value={usuario}
                  placeholder={currentUser.usuario}
                />
              </div>
              <div className="mb-3">
                <TextInput
                  styles={"form-control"}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  value={email}
                  placeholder={currentUser.email}
                />
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  styles={"btn btn-primary"}
                  type={"submit"}
                  title="Editar"
                />
                <Button
                  styles={"btn btn-danger"}
                  type={"button"}
                  onClick={() => setPopUp(true)}
                  title="Eliminar"
                />
              </div>
            </form>
          </div>
          {showPopUp && (
            <PopUp
              onClose={() => setPopUp(false)}
              onContinue={delUser}
              message="Está a punto de eliminar su cuenta permanentemente"
            />
          )}
        </div>
      </div>
    </>
  );
};

UserProfile.propTypes = {
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   avatar: PropTypes.string,
  //   description: PropTypes.string,
  // }).isRequired,
};

export default UserProfile;
