import React from "react";
// esto es { showButtom, titulo, handleOnClick } = props
// podria destructurarlo en la linea siguiente asi: const {showButtom, titulo, handleOnClick} = props;
const Header = ({ showButtom, titulo, handleOnClick }) => {
  return (
    <div className="header">
      <h1>{titulo}</h1>
      {showButtom && <button onClick={handleOnClick}>Agregar</button>}
    </div>
  );
};

Header.defaultProps = {
  showButtom: false,
};
export { Header };
