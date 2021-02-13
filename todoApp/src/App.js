import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, AgregarTareas, Tareas, AgregarUsuarios } from "./Screens";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ejemplo" component={Ejemplo} />
        <Route path="/tareas" component={Tareas} />
        <Route path="/" component={AgregarTareas} />
        <Route path="/agregarusuarios" component={AgregarUsuarios} />
      </Switch>
    </Router>
  );
};

export default App;
