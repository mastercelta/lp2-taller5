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
      <NavBar user={currentUser.nombre}/>
      <div className="user-profile-container">
        <div className="user-profile-card">
          <form className="user-profile-card-form" action="">
            <TextInput
              styles={"login-input"}
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder={currentUser.nombre}
            />
            <TextInput
              styles={"login-input"}
              onChange={(e) => setUsuario(e.target.value)}
              type="text"
              value={usuario}
              placeholder={currentUser.usuario}
            />
            <TextInput
              styles={"login-input"}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder={currentUser.email}
            />
            <TextInput
              styles={"login-input"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"nueva contraseña"}
              type="password"
              value={password}
            />
            <div className="user-profile-footer">
              <Button styles={"edit-button"} type={"submit"} title="Editar" />
            </div>
          </form>
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
