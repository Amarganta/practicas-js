import React, { useState } from "react";
import { Layout, Main } from "../../components";
import { api } from "../../utilities";
const AgregarTareas = () => {
  const [titulo, setTitulo] = useState();
  const [fecha, setFecha] = useState();
  const [descripcion, setDescripcion] = useState();
  const [asignado, setAsignado] = useState();
  // const [tarea, setTarea] = useState({});
  // Este handle on change hacia una funcion para todos los inputs
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   // setTarea({ ...tarea, [name]: value });
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    api.post("/tareas.json", {
      titulo: titulo,
      fecha: fecha,
      descripcion: descripcion,
      asignado: asignado,
      status: "pending",
    });
  };

  return (
    <Layout>
      <Main titulo="Agregar nueva tarea">
        <div>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="titulo"
              name="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <br />
            <input
              type="date"
              placeholder="fecha"
              name="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <br />
            <textarea
              type="text"
              placeholder="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="asignado"
              name="asignado"
              value={asignado}
              onChange={(e) => setAsignado(e.target.value)}
            />
            <button type="submit">Agregar tarea</button>
          </form>
        </div>
      </Main>
    </Layout>
  );
};

export { AgregarTareas };
