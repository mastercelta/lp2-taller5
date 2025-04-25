import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const TextInput = ({type, styles, placeholder, onChange, value}) => {
  return (
    <div>
      <input
        required={true}
        onChange={onChange}
        placeholder={placeholder}
        className={styles}
        type={type}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  styles: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
