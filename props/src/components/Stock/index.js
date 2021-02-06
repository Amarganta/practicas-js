import React from "react";
import "./stock.css";
const Stock = ({ producto, cantidad, maximo }) => {
  let classColor = "";
  if (cantidad < maximo * 0.1) classColor = "stock__list--red";
  else if (cantidad > maximo * 0.1 && cantidad < maximo * 0.25)
    classColor = "stock__list--orange";
  else if (cantidad > maximo * 0.25 && cantidad < maximo * 0.4)
    classColor = "stock__list--yellow";
  else if (cantidad > maximo * 0.4) classColor = "stock__list--green";

  return (
    <div className="stock">
      <ul className={`stock__list ${classColor}`}>
        <li>{`${producto}`}</li>
        <li>{`${cantidad}`}</li>
        <li>{`${maximo}`}</li>
      </ul>
    </div>
  );
};
const ListaStock = () => {
  const productos = [
    { producto: "Chocolates", cantidad: 34, maximo: 100 },
    { producto: "Caramelos", cantidad: 99, maximo: 200 },
    { producto: "Turrones", cantidad: 3, maximo: 50 },
    { producto: "Alfajores", cantidad: 25, maximo: 130 },
    { producto: "Tortas", cantidad: 9, maximo: 10 },
  ];
  return (
    <div>
      {[productos].map((value) => {
        return <Stock producto={value} cantidad={value} maximo={value} />;
      })}
    </div>
  );
};

export { ListaStock };
