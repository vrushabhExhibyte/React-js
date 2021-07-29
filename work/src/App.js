import React from "react";
import { Route,Switch } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import "./App.css"

const App = () => {
  return (
    <>
    
<Switch>
  <Route  exact path="/" component={Login}  />
  <Route exact path="/logout" component={Logout}  />

</Switch>

{/* <Login/>
<Logout/> */}
    </>
  );
};
export default App;