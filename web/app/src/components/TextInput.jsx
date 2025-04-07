import React from "react";
import PropTypes from "prop-types";

const TextInput = ({type, styles, placeholder, onChange}) => {
  return (
    <div>
      <input onChange={onChange} placeholder={placeholder} className={styles} type={type} />
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
