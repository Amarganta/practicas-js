import React, { useState } from "react";
import { axios } from "axios";
const Agregar = () => {
  const [tarea, setTarea] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTarea({ ...tarea, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios.post("/users", tarea);
  };

  return (
    <div>
      <h1>Aqui agregamos tareas</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="titulo"
          name="titulo"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="date"
          placeholder="fecha"
          name="fecha"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          placeholder="descripcion"
          name="descripcion"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          placeholder="asignado"
          name="asignado"
          onChange={handleOnChange}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
};

export { Agregar };
