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

  const submit = () => {
    login(userData);
    console.log(data);
  };
  return (
    <div className="input-container">
      <TextInput
        onChange={(e) => setEmail(e.target.value)}
        styles={"login-input"}
        placeholder="email"
        type="text"
      />
      <TextInput
        onChange={(e) => setPassword(e.target.value)}
        styles={"login-input"}
        placeholder="password"
        type="password"
      />
      <Button onClick={submit} styles={"login-button"} title="login" />
    </div>
  );
};

Login.propTypes = {};

export default Login;
