import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/logout" component={Logout} />
      </Switch>
      <Login />
    </>
  );
}

export default App;
