import "./App.css";
import { Fecha, Alert } from "./components";
import Formulario from "./components/Formulario";
import Pagina from "./components/Pagina";
import { Puntaje } from "./components/PuntajeItem";
import { ListaStock } from "./components/Stock";

function App() {
  return (
    <div className="App">
      <Formulario />
      {/* <Precio moneda="ARS" valor="2133" /> */}
      <Fecha fecha={Date.now()} />
      <Pagina actual="60" maximo="100" />
      <div>
        <Puntaje puntaje={5} icono="corazon" color="rojo" />
        <Puntaje puntaje={3} icono="estrella" color="amarillo" />
        <Puntaje puntaje={0} icono="corazon" color="verde" />
        <Puntaje puntaje={1} icono="estrella" />
        <Puntaje puntaje={2} icono="estrella" />
      </div>
      <Alert
        status="danger"
        message="There was an error processing your request"
        icon="danger"
      />
      <Alert
        status="success"
        message="Data uploaded to the server. Fire On!"
        icon="success"
      />
      <Alert
        status="warning"
        message="Seems your accont is about expire, upgrade now"
        icon="warning"
      />
      <Alert
        status="info"
        message="Charkra is going live on August 30th. Get ready!"
        icon="info"
      />
      {/* <Stock producto="Chocolate" cantidad={34} maximo={100} />
      <Stock producto="Caramelos" cantidad={99} maximo={200} />
      <Stock producto="Turrones" cantidad={3} maximo={50} />
      <Stock producto="Alfajores" cantidad={25} maximo={130} />
      <Stock producto="Tortas" cantidad={9} maximo={10} /> */}
      <ListaStock />
    </div>
  );
}

export default App;
