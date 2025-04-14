// import React from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router";
import formattedDate from "../functions/formattedDate";

/**
 * Post component to display a list of posts.
 *
 * @param {Object[]} data - Array of post objects.
 * @param {number} data[].id - Unique identifier for the post.
 * @param {string} data[].url_imagen - URL of the post's image.
 * @param {string} data[].fecha_creacion - Creation date of the post in ISO format.
 * @param {string} data[].titulo - Title of the post.
 * @param {string} data[].contenido - Content of the post.
 */

const Post = ({data}) => {
  const navigate = useNavigate();

  const lastPost = data.length > 0 ? [data[data.length - 1]] : [];

  // format dates

  data.pop();
  return (
    <>
      <div
        className="card mb-4"
        onClick={() => navigate(`/read_post/${lastPost[0].id}`)}
      >
        <a
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/read_post/${lastPost[0].id}`);
          }}
        >
          <img
            className="card-img-top-last"
            src={lastPost[0]?.url_imagen || "default-image-url.jpg"}
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="small text-muted">
            {lastPost[0]
              ? formattedDate(lastPost[0].fecha_creacion)
              : "No date available"}
          </div>
          <h2 className="card-title">
            {lastPost[0]?.titulo || "Untitled Post"}
          </h2>
          <p className="card-text">
            {lastPost[0] ? lastPost[0].contenido : "No content available"}
          </p>
          <a
            className="btn btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/read_post/${lastPost[0].id}`);
            }}
          >
            Read more →
          </a>
        </div>
      </div>
      <div className="row">
        {data.map((p) => {
          return (
            <div key={p.id} className="col-lg-6">
              <div
                className="card mb-4"
                onClick={() => navigate(`/read_post/${p.id}`)}
                style={{cursor: "pointer"}}
              >
                <a>
                  <img
                    className="card-img-top"
                    src={
                      p.url_imagen ||
                      "https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                    }
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <div className="small text-muted">
                    {p.fecha_creacion
                      ? formattedDate(p.fecha_creacion)
                      : "No date available"}
                  </div>
                  <h2 className="card-title h4">
                    {p.titulo || "Untitled Post"}
                  </h2>
                  <p className="card-text">
                    {p.contenido ? p.contenido : "No content available"}
                  </p>
                  <a
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/read_post/${p.id}`);
                    }}
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Post;
