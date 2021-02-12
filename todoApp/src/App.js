import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, Agregar, Tareas } from "./Screens";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ejemplo" component={Ejemplo} />
        <Route path="/tareas" component={Tareas} />
        <Route path="/" component={Agregar} />
      </Switch>
    </Router>
  );
};

export default App;
