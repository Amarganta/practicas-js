import React from "react";
import "./login.css";
import { Layout, Main } from "../../components";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <Layout>
      <Main>
        <div className="login">
          <h1>¡Bienvenido!</h1>
          <input />
          <label>Usuario</label>
          <br />
          <input />
          <label>Contraseña</label>
          <br />
          <Link to="/Home" className="btn">
            Iniciar sesión
          </Link>
          {/* <button type="submit">Iniciar Sesión</button> */}
        </div>
      </Main>
    </Layout>
  );
};
