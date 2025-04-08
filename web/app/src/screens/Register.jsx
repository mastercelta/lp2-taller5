import {useState} from "react";
import Button from "../components/Button.jsx";
import TextInput from "../components/TextInput.jsx";
import usePost from "../customhook/usePost.js";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Create an Account</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // submit();
          }}
        >
          <TextInput
            onChange={(e) => setName(e.target.value)}
            styles={"login-input"}
            placeholder="name"
            type="text"
            required
          />
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            styles={"login-input"}
            placeholder="email"
            type="text"
            required
          />
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            styles={"login-input"}
            placeholder="password"
            type="password"
            required
          />
          <Button styles={"login-button"} type={"submit"} title="Login" />
        </form>
      </div>
    </div>
  );
}
