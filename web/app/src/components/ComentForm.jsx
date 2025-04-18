import PropTypes from "prop-types";
const ComentForm = ({comentario, setComentario}) => {
  return (
    <>
      <textarea
        className="form-control"
        rows="3"
        placeholder="Leave a comment!"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        required={true}
      ></textarea>
    </>
  );
};

ComentForm.propTypes = {
  comentario: PropTypes.string,
  setComentario: PropTypes.func.isRequired,
};

export default ComentForm;
