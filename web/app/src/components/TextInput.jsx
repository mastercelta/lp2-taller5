import React from "react";
import PropTypes from "prop-types";

const TextInput = ({type, styles, placeholder, onChange}) => {
  return (
    <div>
      <input
        required={true}
        onChange={onChange}
        placeholder={placeholder}
        className={styles}
        type={type}
      />
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  // required: PropTypes.bool,
  styles: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
