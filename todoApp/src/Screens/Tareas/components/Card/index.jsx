import React, { useState } from "react";
import { api } from "../../../../utilities";
import "./card.css";
const Card = ({ titulo, descripcion, asignado, fecha, status, id }) => {
  const [taskStatus, setTaskStatus] = useState(status);

  const getCardColor = () => {
    console.log("asigna color");
    switch (taskStatus) {
      case "pending":
        return "bg-warning";
      case "canceled":
        return "bg-danger";
      default:
        return "bg-success";
    }
  };

  const handleOnClick = (taskStatus) => {
    api
      .patch(`/tareas/${id}.json`, {
        status: taskStatus,
      })
      .then((response) => {
        setTaskStatus(response.data.status);
      });
  };
  return (
    <div className="col">
      <div className={`card text-dark  shadow-sm`}>
        <div className="row">
          <div className="col">
            <div className="card-header d-flex align-items-center">
              {titulo}
              <div className="d-flex ms-auto custom-botton ">
                <button
                  type="button"
                  className="btn btn-warning shadow-sm"
                  title="Pendiente"
                  id="pendiente"
                  onClick={() => handleOnClick("pending")}
                />
                <button
                  type="button"
                  className="btn btn-success shadow-sm"
                  title="Realizada"
                  id="realizada"
                  onClick={() => handleOnClick("success")}
                />
                <button
                  type="button"
                  className="btn btn-danger shadow-sm"
                  title="Cancelar"
                  id="cancelar"
                  onClick={() => handleOnClick("canceled")}
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className={`col color-bar ${getCardColor()}`}>Status</div>
                <h5 className="card-title">{descripcion}</h5>
                <p className="card-text">{asignado}</p>
                <h6>{fecha}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
