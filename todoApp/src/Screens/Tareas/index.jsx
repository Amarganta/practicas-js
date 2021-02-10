import React from "react";
import { api } from "../../utilities";

const Tareas = ({ titulo }) => {
  api
    .get("/tareas.json")
    .then((response) => {
      // setTitulo({ titulo: data });
      console.log(response.data);
    })
    .catch((error) => console.log(error));

  return (
    <div>
      <h1>Estas son las tareas agregadas</h1>
      <div className="card text-dark bg-light mb-3" style={{ width: "18rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h6>Asignado</h6>
        </div>
      </div>
    </div>
  );
};

export { Tareas };
