import {useState} from "react";
import Button from "../components/Button.jsx";
import TextInput from "../components/TextInput.jsx";
import usePost from "../customhook/usePost.js";
import {useNavigate} from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const URL = "http://localhost:8000/users/";

  let options = {
    usuario,
    nombre,
    email,
    password,
  };

  const {data, loading, error, post} = usePost(URL, options);

  const createUser = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setErrorMessage("Invalid email");
    }
    post().then(() => navigate("/login"));
  };

  return (
    <div className="register-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Crear una cuenta</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser();
          }}
        >
          <TextInput
            onChange={(e) => setUsuario(e.target.value)}
            styles={"login-input"}
            placeholder="usuario"
            type="text"
            required
          />
          <TextInput
            onChange={(e) => setNombre(e.target.value)}
            styles={"login-input"}
            placeholder="nombre"
            type="text"
            required
          />
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
          <Button styles={"login-button"} type={"submit"} title="Registrar" />
        </form>
        {error && <strong>{"Verify your credentials"}</strong>}
        {errorMessage && <strong>{errorMessage}</strong>}
      </div>
    </div>
  );
}
