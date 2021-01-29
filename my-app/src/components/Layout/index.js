import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";

import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <div className="columnas">
        <div className="div-aside">
          <Aside />
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};
