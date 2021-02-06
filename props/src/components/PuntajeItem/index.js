import "./puntaje.css";
const PuntajeItem = ({ tipo, color, icono }) => {
  const type = tipo === "vacio" ? "far" : "fas";
  const icon = icono === "corazon" ? "heart" : "star";
  return <i className={`${type} fa-${icon} ${color}`} />;
};

const Puntaje = ({ puntaje, color, icono }) => {
  // const renderItem = () => {
  //   return [0, 1, 2, 3, 4].map((value) => {
  //     return (
  //       <PuntajeItem
  //         key={value}
  //         color={color}
  //         tipo={puntaje <= value ? "vacio" : "lleno"}
  //         icono={icono}
  //       />
  //     );
  //   });
  // };

  return (
    <div className="mb-2 mt-2">
      {/* {renderItem()}
      <br /> */}
      {[0, 1, 2, 3, 4].map((value) => {
        return (
          <PuntajeItem
            key={value}
            color={color}
            tipo={puntaje <= value ? "vacio" : "lleno"}
            icono={icono}
          />
        );
      })}
      <span className={`texto`}>{`${puntaje} de 5 puntos`}</span>
      <br />
      {/* {Array(puntaje).fill(<PuntajeItem color={color} tipo="lleno" icono={icono} />)}
            {Array(5 - puntaje).fill(<PuntajeItem color={color} tipo="vacio" icono={icono} />)} */}
    </div>
  );
};

export { Puntaje };
