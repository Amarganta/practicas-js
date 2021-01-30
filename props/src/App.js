import "./App.css";
import { Fecha, Precio } from "./components";
import Formulario from "./components/Formulario";
import Pagina from "./components/Pagina";

function App() {
  return (
    <div className="App">
      <Formulario />
      <Precio moneda="ARS" valor="2133" />
      <Fecha fecha={Date.now()} />
      <Pagina actual="60" maximo="100" />
    </div>
  );
}

export default App;
