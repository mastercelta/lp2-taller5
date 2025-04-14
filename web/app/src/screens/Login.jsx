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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <div className="card-header text-center">
          <h2>Iniciar sesión</h2>
        </div>
        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="correo"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Acceder
            </button>
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
