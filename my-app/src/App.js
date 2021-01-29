import "./app.css";
import "./components/Layout";
import { Contact, Home, Login, Offers, Shop } from "./screens";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Offers" component={Offers} />
          <Route path="/Shop" component={Shop} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
