import React from "react";
import { Header } from "./components";
import "./styles.css";
// el showButtom que esta dentro de la etiqueda header es una propiedad que traigo de header de main y
// en esta pagina la convierto en el valor de una prop de main que si puedo llamar donde exista una etiqueta Main
const Main = ({ children, showButtom, titulo }) => {
  // Javascript
  const handleOnClick = () => {
    console.log("hola");
  };
  return (
    <>
      {/* JSX */}
      <Header
        titulo={titulo}
        handleOnClick={handleOnClick}
        showButtom={showButtom}
      />
      <main className="main bg-light">{children}</main>
    </>
  );
};

export { Main };
