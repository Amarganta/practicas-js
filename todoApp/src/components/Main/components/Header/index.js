import React from "react";

const Header = ({ titulo, handleOnClick }) => {
  return (
    <div className="header">
      <h1>{titulo}</h1>
      <button onClick={handleOnClick}>Agregar</button>
    </div>
  );
};

export { Header };
