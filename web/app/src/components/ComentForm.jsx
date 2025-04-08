import React from "react";
import PropTypes from "prop-types";

const ComentForm = (props) => {
  return (
    <>
      <form className="mb-4">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Leave a comment!"
        ></textarea>
      </form>
    </>
  );
};

ComentForm.propTypes = {};

export default ComentForm;
