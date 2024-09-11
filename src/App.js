import React from "react";
import {Route, Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./screens/Home";
import Pelisencartel from "./components/Pelisencartel/Pelisencartel";
import Pelispopu from "./components/Pelispopu/Pelispopu";

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
          <Route exact path= "/" component= {Home}/>
          <Route path="/favoritos" component={Home}/>
          <Route path="/vertodaspopu" component={Pelispopu}/>
          <Route path="/vertodascartelera" component={Pelisencartel}/>
          <Route path="/detalle/:id" component={Home}/> 

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
