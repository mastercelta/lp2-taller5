import React from "react";
import PropTypes from "prop-types";

const PopUp = ({message, onClose, onContinue}) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <p>{message}</p>
        <button onClick={onClose} className="btn btn-warning">
          Cancelar
        </button>
        <button onClick={onContinue} className="btn btn-danger">
          Continuar
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
};

PopUp.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default PopUp;
