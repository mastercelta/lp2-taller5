import React from "react";
import PostHeader from "./PostHeader";

const PostContent = () => {
  return (
    <article>
      <PostHeader
        title={"A post title must be placed here"}
        meta={"Posted on January 1, 2023 by Start Bootstrap"}
      />
      <figure className="mb-4">
        <img
          className="img-fluid rounded"
          src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
          alt="..."
        />
      </figure>
      <section className="mb-5">
        <h2 className="fw-bolder mb-4 mt-5">
          I have odd cosmic thoughts every day
        </h2>
        <p className="fs-5 mb-4">
          The universe is large and old, and the ingredients for life as we know
          it are everywhere... <br />
          <br />
          Venus has a runaway greenhouse effect...
        </p>
      </section>
    </article>
  );
};

export default PostContent;
