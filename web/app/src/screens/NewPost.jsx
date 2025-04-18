import {useState} from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Render from "../components/Render";
import ReactQuill from 'react-quill'

const NewPost = () => {
  const [url, setUrl] = useState("");
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  console.log(contenido);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const applyStyle = (style) => {
    const textarea = document.getElementById("content");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = contenido.substring(start, end);
    const beforeText = contenido.substring(0, start);
    const afterText = contenido.substring(end);

    let styledText = selectedText;
    if (style === "bold") {
      styledText = `**${selectedText}**`;
    } else if (style === "italic") {
      styledText = `*${selectedText}*`;
    } else if (style.startsWith("h")) {
      const level = style.slice(1);
      styledText = `${"#".repeat(level)} ${selectedText}`;
    } else if (style === "list") {
      styledText = `- ${selectedText}`;
    }

    setContenido(beforeText + styledText + afterText);
  };

  return (
    <main>
      <NavBar user={currentUser?.nombre || "Usuario"} />
      <div className="container mt-5">
        <div className="card bg-light">
          <div className="card-body">
            <form>
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <textarea
                id="titulo"
                className="form-control"
                rows="1"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />

              <label htmlFor="content" className="form-label mt-3">
                Contenido
              </label>
              <textarea
                id="content"
                className="form-control"
                rows={15}
                placeholder="Contenido"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
              />
              <div className="text-style-buttons mt-3">
                {[
                  {button: "bold", color: "#007BFF"},
                  {button: "italic", color: "#6C757D"},
                  {button: "h1", color: "#0056b3"},
                  {button: "h2", color: "#0056b3"},
                  {button: "h3", color: "#0056b3"},
                  {button: "h4", color: "#0056b3"},
                  {button: "h5", color: "#0056b3"},
                  {button: "h6", color: "#0056b3"},
                  {button: "list", color: "#17A2B8"},
                ].map((style) => (
                  <button
                    key={style.button}
                    type="button"
                    onClick={() => applyStyle(style.button)}
                    className="btn btn-secondary me-2"
                    style={{
                      background: style.color,
                      height: "30px",
                      padding: "3px",
                    }}
                  >
                    {style.button.charAt(0).toUpperCase() +
                      style.button.slice(1)}
                  </button>
                ))}
              </div>
              <label htmlFor="url" className="form-label mt-3">
                Portada (URL)
              </label>
              <textarea
                id="url"
                className="form-control"
                rows={1}
                placeholder="URL de la portada"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </form>
          </div>
        </div>
        <Render contenido={contenido} url={url} titulo={titulo} />
      </div>
    </main>
  );
};

NewPost.propTypes = {
  user: PropTypes.shape({
    nombre: PropTypes.string,
  }),
};

export default NewPost;
