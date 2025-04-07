import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Button = ({title, onClick, styles}) => {
  return (
    <div>
      <button className={styles} onClick={onClick}>
        <span>{title}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
