import React, { useState } from "react";
import { api } from "../../../../utilities";
import "./card.css";
const Card = ({ titulo, descripcion, asignado, fecha, status, id }) => {
  const [taskStatus, setTaskStatus] = useState(status);

  const getCardColor = () => {
    console.log("asigna color");
    switch (taskStatus) {
      case "pending":
        return "border-start-pending";
      case "canceled":
        return "border-start-canceled";
      default:
        return "border-start-success";
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
      <div className={`card text-dark  ${getCardColor()}  shadow-sm`}>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="card-header card-title d-flex align-items-center">
                <h4>{titulo}</h4>
                <div className="d-flex ms-auto custom-botton ">
                  <button
                    type="button"
                    className="btn btn-primary shadow-sm"
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

            <div className="row">
              <div className="col">
                <h5 className="card-subtitle">{asignado}</h5>
                <p className="card-text">{descripcion}</p>
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
