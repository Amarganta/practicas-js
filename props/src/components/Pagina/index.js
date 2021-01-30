import React from "react";

const Pagina = ({ actual, maximo }) => {
  return (
    <div>
      <button>Previous</button>
      <button>1</button>
      <button>...</button>
      <button>{actual}</button>
      <button>...</button>
      <button>{maximo}</button>
      <button>Next</button>
    </div>
  );
};

export default Pagina;
