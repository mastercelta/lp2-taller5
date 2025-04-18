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

  const {data, loading, error, post} = usePost(URL);

  const createUser = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setErrorMessage("Invalid email");
    }
    post(options).then(() => navigate("/login"));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{width: "30rem"}}>
        <div className="card-header text-center">
          <h2>Crear una cuenta</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser();
          }}
        >
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              id="usuario"
              className="form-control"
              type="text"
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              id="nombre"
              className="form-control"
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo
            </label>
            <input
              id="email"
              className="form-control"
              type="email"
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
              className="form-control"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Registrar
          </button>
        </form>
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            Verifica tus credenciales
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
