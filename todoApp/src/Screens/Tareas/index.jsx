import React, { useState, useEffect } from "react";
import { Layout, Main } from "../../components";
import { api } from "../../utilities";
import { objectToArray } from "../../helpers";
const Tareas = ({ titulo }) => {
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
      <Main showButtom={true} titulo="Lista de Tareas">
        <div>
          {tareas.map((tarea) => {
            return (
              <div
                className="card text-dark bg-light mb-3"
                style={{ width: "18rem" }}
              >
                <div className="card-header">{tarea.titulo}</div>
                <div className="card-body">
                  <h5 className="card-title">{tarea.descripcion}</h5>
                  <p className="card-text">{tarea.asignado}</p>
                  <h6>{tarea.fecha}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </Main>
    </Layout>
  );
};

export { Tareas };
