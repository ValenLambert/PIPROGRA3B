import React from "react";
import {Route, Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./screens/Home"

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
          <Route exact path= "/" component= {Home}/>
          <Route path="/favoritos" component={Home}/>
          <Route path="/vertodas" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
