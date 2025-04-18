import React, {useState} from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar.jsx";
import TextInput from "../components/TextInput.jsx";
import Button from "../components/Button.jsx";

const UserProfile = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavBar user={currentUser.nombre} />
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <form>
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
              <div className="mb-3">
                <TextInput
                  styles={"form-control"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={"Nueva contraseña"}
                  type="password"
                  value={password}
                />
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  styles={"btn btn-primary"}
                  type={"submit"}
                  title="Editar"
                />
              </div>
            </form>
          </div>
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
