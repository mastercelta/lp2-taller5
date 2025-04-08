import React from "react";
import PropTypes from "prop-types";

const PostHeader = ({title, meta}) => {
  return (
    <header className="mb-4">
      {/* <!-- Post title--> */}
      <h1 className="fw-bolder mb-1">{title}</h1>
      {/* <!-- Post meta content--> */}
      <div className="text-muted fst-italic mb-2">{meta}</div>
    </header>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.string,
};

export default PostHeader;
