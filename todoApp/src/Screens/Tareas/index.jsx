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

  traer();
  useEffect(() => {
    traer();
  }, []);
  return (
    <Layout>
      <Main showButtom={true} titulo="Lista de Tareas">
        <div>
          {tareas.map((tarea) => {
            <div
              className="card text-dark bg-light mb-3"
              style={{ width: "18rem" }}
            >
              <div className="card-header">{tarea.fecha}</div>
              <div className="card-body">
                <h5 className="card-title">{tarea.titulo}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h6>Asignado</h6>
              </div>
            </div>;
          })}
        </div>
      </Main>
    </Layout>
  );
};

export { Tareas };
