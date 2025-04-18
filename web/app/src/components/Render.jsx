import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Render = ({titulo, contenido, url}) => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <article>
          <header className="mb-4">
            <h1 className="fw-bolder mb-1">{titulo ? titulo : "No title"}</h1>
          </header>
          <figure className="mb-4">
            <img
              className="img-fluid rounded"
              src={
                url ? url : "https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
              }
              alt="..."
            />
          </figure>
          <section className="mb-5">
              {contenido ? contenido : "no content"}
          </section>
        </article>
      </div>
    </div>
  );
};

Render.propTypes = {
  titulo: PropTypes.string,
  contenido: PropTypes.string,
  url: PropTypes.string,
};

export default Render;
