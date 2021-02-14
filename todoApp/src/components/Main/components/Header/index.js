import React from "react";
import "./header.css";
// esto es { showButtom, titulo, handleOnClick } = props
// podria destructurarlo en la linea siguiente asi: const {showButtom, titulo, handleOnClick} = props;
const Header = ({ showButtom, titulo, handleOnClick }) => {
  return (
    <div className="container shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2 ms-4 me-4  ">
        <h4 className="h4">{titulo}</h4>
        {showButtom && (
          <button
            onClick={handleOnClick}
            className="d-none d-sm-inline-block  btn btn-agregar btn-rounded"
          >
            Agregar+
          </button>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  showButtom: false,
};
export { Header };
