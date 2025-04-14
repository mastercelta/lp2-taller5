import React, {useEffect, useState} from "react";
import ComentForm from "./ComentForm";
import useFetch from "../customhook/useFetch";

const Comments = () => {
  const storedToken = JSON.parse(localStorage.getItem("token"));

  const URL = "http://localhost:8000/comments/";

  const OPTIONS = {
    headers: {Authorization: `Bearer ${storedToken}`},
    params: {comment_id: 6000},
  };

  const {data, loading, error} = useFetch(URL, OPTIONS);
  // console.log(resp.nombre);
  return (
    <section className="mb-5">
      <div className="card bg-light">
        <div className="card-body">
          <form className="mb-4">
            <ComentForm />
          </form>

          {data.length ? (
            data.map((comment) => (
              <div key={comment.id} className="d-flex">
                <div className="ms-3">
                  <div className="fw-bold"></div>
                  {comment.comentario}
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex">
              <div className="ms-3">
                <div className="fw-bold">nombre</div>
                {data.comentario}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
