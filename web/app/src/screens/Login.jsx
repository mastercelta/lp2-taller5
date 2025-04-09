/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import PropTypes from "prop-types";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import useLogin from "../customhook/loginPost.js";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let url = "http://localhost:8000/login";

  const userData = {
    email: email,
    password: password,
  };
  const {loading, error, data, login} = useLogin(url);

  const submit = async () => {
    login(userData);
  };
  return (
    <div className="register-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Iniciar sesión</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            styles={"login-input"}
            placeholder="correo"
            type="text"
            required
          />
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            styles={"login-input"}
            placeholder="contraseña"
            type="password"
            required
          />
          <Button styles={"login-button"} type={"submit"} title="Acceder" />
        </form>
        {error && <strong>{error}</strong>}
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
