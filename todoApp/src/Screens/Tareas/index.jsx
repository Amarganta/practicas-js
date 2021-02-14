import React, { useState, useEffect } from "react";
import { Layout, Main } from "../../components";
import { api } from "../../utilities";
import { objectToArray } from "../../helpers";
import { Card } from "./components";
import "./tareas.css";
const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  const traer = () => {
    api
      .get("/tareas.json")
      .then((response) => {
        console.log(response);
        // setTitulo({ titulo: data });
        const datos = objectToArray(response.data);
        setTareas(datos);
        // a tareas le asignamos el valor datos
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    traer();
  }, []);
  return (
    <Layout>
      <Main showButtom={true} titulo="Proyectos">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tareas.map(
            ({ titulo, descripcion, asignado, fecha, status, id }) => {
              return (
                <Card
                  titulo={titulo}
                  descripcion={descripcion}
                  asignado={asignado}
                  fecha={fecha}
                  status={status}
                  id={id}
                />
              );
            }
          )}
        </div>
      </Main>
    </Layout>
  );
};

export { Tareas };
