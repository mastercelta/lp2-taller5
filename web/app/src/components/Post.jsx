// import React from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router";
import formattedDate from "../functions/formattedDate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

const Post = ({data, lastElement}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div
        className="card mb-4"
        onClick={() => navigate(`/read_post/${lastElement.id}`)}
      >
        {lastElement ? (
          <a
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/read_post/${lastElement.id}`);
            }}
          >
            <img
              className="card-img-top-last"
              src={lastElement?.url_imagen || "default-image-url.jpg"}
              alt="Image post"
            />
          </a>
        ) : (
          ""
        )}
        <div className="card-body">
          <div className="small text-muted">
            {lastElement ? formattedDate(lastElement.fecha_creacion) : ""}
          </div>
          <h2 className="card-title">{lastElement?.titulo || ""}</h2>
          <ReactQuill readOnly={true} value={parseData[0]} theme="bubble" />

          {lastElement ? (
            <a
              className="btn btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/read_post/${lastElement.id}`);
              }}
            >
              Read more →
            </a>
          ) : (
            ""
          )}
        </div>
      </div> */}
      {/* Render a grid of posts */}
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
                  {/* contenido */}
                  {(() => {
                    try {
                      let parsedContent = JSON.parse(p.contenido);
                      console.log(parsedContent)
                      parsedContent =
                        parsedContent.ops[0].insert.length > 100
                          ? `${parsedContent.ops[0].insert.substring(
                              0,
                              100,
                            )}...`
                          : parsedContent.ops[0].insert;

                      return (
                        <div style={{marginLeft: -15}}>
                          <ReactQuill
                            readOnly={true}
                            value={parsedContent}
                            theme="bubble"
                          />
                        </div>
                      );
                    } catch (error) {
                      return <p>{p.contenido}</p>;
                    }
                  })()}
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
  lastElement: PropTypes.array.isRequired,
};

export default Post;
