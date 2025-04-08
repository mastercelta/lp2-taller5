import React from "react";
import ComentForm from "./ComentForm";

const Comments = () => {
  return (
    <section className="mb-5">
      <div className="card bg-light">
        <div className="card-body">
          <form className="mb-4">
            <ComentForm />
          </form>
          <div className="d-flex">
            <div className="ms-3">
              <div className="fw-bold">Commenter Name</div>
              When I look at the universe and all the ways the universe wants to
              kill us...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
