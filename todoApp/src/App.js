import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo } from "./Screens/Ejemplo";
import { Agregar } from "./Screens/Agregar";
import { Layout, Main } from "./components";

const App = () => {
  return (
    <Router>
      <Layout>
        <Main>
          <Switch>
            <Route path="/ejemplo" component={Ejemplo} />
            <Route path="/" component={Agregar} />
          </Switch>
        </Main>
      </Layout>
    </Router>
  );
};

export default App;
