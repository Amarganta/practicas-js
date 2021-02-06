import React from "react";
import "./alert.css";
const Alert = ({ status, message, icon }) => {
  switch (icon) {
    case "danger":
      icon = "fa fa-exclamation-circle";
      break;
    case "info":
      icon = "fa fa-info-circle";
      break;
    case "success":
      icon = "fa fa-check-circle";
      break;
    case "warning":
      icon = "fa fa-exclamation-triangle";
      break;
    default:
      break;
  }
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`alert alert-${status} col-5 d-flex align-items-center`}
        role="alert"
      >
        <i className={`${icon}`} />
        <span className="span ms-1">{`${message}`}</span>
      </div>
    </div>
  );
};

export { Alert };
