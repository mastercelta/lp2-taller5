import {useState, useRef} from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
// import Render from "../components/Render";
import ReactQuill from "react-quill";
import usePost from "../customhook/usePost";
import {useNavigate} from "react-router";

import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const NAVIGATE = useNavigate();
  const storedToken = JSON.parse(localStorage.getItem("token"));
  const [url, setUrl] = useState("");
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const quillRef = useRef(null);

  const OPTIONS = {
    headers: {Authorization: `Bearer ${storedToken}`},
  };

  const {data, post} = usePost("http://localhost:8000/posts/");

  const createPost = () => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const delta = quill.getContents();
      const contenidoDeltaJSON = JSON.stringify(delta);
      console.log(contenidoDeltaJSON);
      post({titulo, contenido: contenidoDeltaJSON, url_imagen: url}, OPTIONS);
      NAVIGATE("/blog/page/1");
    }
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const handleChange = (value) => {
    setContenido(value);
  };

  return (
    <main>
      <NavBar user={currentUser?.nombre || "Usuario"} />
      <div className="create-post-container">
        {/* area de edicón */}
        <div className="container mt-5-create-post">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createPost();
            }}
          >
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
              required={true}
            />
            <label htmlFor="url" className="form-label mt-3">
              Portada (URL)
            </label>
            <textarea
              required={true}
              id="url"
              className="form-control"
              rows={1}
              placeholder="URL de la portada"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <label htmlFor="contenido" className="form-label mt-3">
              Contenido
            </label>
            <ReactQuill
              style={{scrollBehavior: "auto", height: "50vh", width: "105vh"}}
              value={contenido}
              onChange={handleChange}
              ref={quillRef}
              modules={{
                toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  [{header: [1, 2, false]}],
                  ["link", "image"],
                  [{list: "ordered"}, {list: "bullet"}],
                  [{size: ["small", false, "large", "huge"]}],
                  [{font: ["serif", "monospace"]}],
                ],
              }}
              formats={[
                "bold",
                "italic",
                "underline",
                "strike",
                "header",
                "link",
                "image",
                "list",
                "bullet",
                "size",
                "font",
              ]}
            />
            <button
              className="btn btn-primary btn-post mt-3 position-absolute bottom-86 start-93"
              type="submit"
            >
              Publicar
            </button>
          </form>
        </div>
        {/* contenido actual */}
        <div className="actual-content-container">
          <div className="mb-4">
            <div className="row">
              <div className="col-lg-8">
                <article className="actual-content-article">
                  <header className="mb-4">
                    <h1 className="fw-bolder mb-1">
                      {titulo ? titulo : "No title"}
                    </h1>
                  </header>
                  <figure className="mb-4">
                    <img
                      className="img-fluid rounded"
                      src={
                        url
                          ? url
                          : "https://dummyimage.com/750x350/dee2e6/6c757d.jpg"
                      }
                    />
                  </figure>
                  <section className="mb-5">
                    <ReactQuill
                      readOnly={true}
                      value={contenido}
                      theme="bubble"
                    />
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

CreatePost.propTypes = {
  user: PropTypes.shape({
    nombre: PropTypes.string,
  }),
};

export default CreatePost;
