import React from "react";
import { Header } from "./components";
import "./styles.css";

const Main = ({ children }) => {
  // Javascript
  const handleOnClick = () => {
    console.log("hola");
  };
  return (
    <>
      {/* JSX */}
      <Header titulo="Este es el titulo" handleOnClick={handleOnClick} />
      <main className="main bg-light">{children}</main>
    </>
  );
};

export { Main };
