/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useRef} from "react";
import {useParams} from "react-router";
import PostHeader from "./PostHeader";
import PropTypes from "prop-types";
import formattedDate from "../functions/formattedDate";
import PopUp from "./PopUp";
import ReactQuill from "react-quill";

import Options from "../options";

import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import usePut from "../customhook/usePut";
import useDelete from "../customhook/useDelete";

const PostContent = ({data}) => {
  console.log(data);
  const params = useParams();
  const POST_ID = params.id;
  let parseData = data.contenido ? JSON.parse(data.contenido) : "";
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));

  const options = new Options(storedToken);

  const [showPopUp, setPopUp] = useState(false);
  const [edit, setEdit] = useState(true);
  let [contenido, setContenido] = useState(parseData);
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");

  const quillRef = useRef(null);
  // console.log(contenido);

  const editPost = () => {
    setEdit(!edit);
    setTitulo(data.titulo);
    setUrl(data.url_imagen);
  };
  const handleChange = (value) => setContenido(value);

  const POST_URL = `http://localhost:8000/posts`;

  const {error, loading, putRequest} = usePut(POST_URL);

  const {deleteData} = useDelete(POST_URL);

  const submitEdit = () => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const delta = quill.getContents();
      const contenidoDeltaJSON = JSON.stringify(delta);
      console.log(contenidoDeltaJSON);
      putRequest(
        POST_ID,
        {titulo, contenido: contenidoDeltaJSON, url_imagen: url},
        options,
      );
      setEdit(!edit);
      // NAVIGATE("/blog/page/1");
    }
  };

  const deletePost = () => {
    deleteData(POST_ID, options);
    window.location.href = "/blog/page/1";
  };

  return (
    <article>
      {data.id_usuario === storedUser.id && (
        <>
          <button
            className="btn btn-warning"
            id="button-search"
            type="button"
            onClick={editPost}
          >
            {edit ? "Editar" : "Cancelar"}
          </button>
          {!edit && (
            <>
              <button
                className="btn btn-success"
                id="button-search"
                type="button"
                onClick={() => {
                  submitEdit();
                  window.location.reload();
                }}
              >
                {loading ? "loading" : "Publicar"}
              </button>
              <button
                className="btn btn-danger"
                id="button-search"
                type="button"
                onClick={() => {
                  setPopUp(true);
                }}
              >
                Eliminar
              </button>
            </>
          )}
        </>
      )}
      {!edit ? (
        <>
          <textarea
            id="titulo"
            className="form-control"
            rows="1"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required={true}
          />
        </>
      ) : (
        <PostHeader
          title={data.titulo || "Untitled post"}
          meta={formattedDate(data.fecha_creacion || "No date")}
        />
      )}
      {!edit ? (
        <>
          <textarea
            required={true}
            id="url"
            className="form-control"
            rows={1}
            placeholder="URL de la portada"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </>
      ) : (
        <figure className="mb-4">
          <img
            className="img-fluid rounded"
            src={
              data.url_imagen ||
              "https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
            }
            alt="..."
          />
        </figure>
      )}
      <section className="mb-5">
        <ReactQuill
          onChange={handleChange}
          value={edit ? parseData : contenido}
          ref={quillRef}
          readOnly={edit}
          theme={"bubble"}
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
      </section>
      {showPopUp && (
        <PopUp
          onClose={() => setPopUp(false)}
          onContinue={deletePost}
          message="Está a punto de eliminar la publicación"
        />
      )}
    </article>
  );
};
PostContent.propTypes = {
  edit: PropTypes.bool.isRequired,
};

export default PostContent;
