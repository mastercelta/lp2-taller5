/* eslint-disable react/prop-types */
import React from "react";
import PostHeader from "./PostHeader";
import PropTypes from "prop-types";
import formattedDate from "../functions/formattedDate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostContent = ({data}) => {
  let parseData = data.contenido ? JSON.parse(data.contenido) : "";

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
        <ReactQuill value={parseData} readOnly={true} theme="bubble" />
      </section>
    </article>
  );
};
PostContent.propTypes = {};

export default PostContent;
