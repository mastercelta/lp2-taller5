import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Button = ({title, onClick, styles, type}) => {
  return (
    <div>
      <button type={type} className={styles} onClick={onClick}>
        <span>{title}</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
