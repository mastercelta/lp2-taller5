import React from "react";
import PostHeader from "./PostHeader";
import PropTypes from "prop-types";
import formattedDate from "../functions/formattedDate";

const PostContent = ({data}) => {
  return (
    <article>
      <PostHeader
        title={data.titulo || "A post title must be placed here"}
        meta={formattedDate(data.fecha_creacion || "No date")}
      />
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
      <section className="mb-5">
        <h2 className="fw-bolder mb-4 mt-5">
          I have odd cosmic thoughts every day
        </h2>
        <p className="fs-5 mb-4">
          {data.contenido ? data.contenido : "no content"}
        </p>
      </section>
    </article>
  );
};
PostContent.propTypes = {
  
};

export default PostContent;
