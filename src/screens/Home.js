import React from "react";
import Form from "../components/Form/Form";
import Pelispopu from "../components/Pelispopu/Pelispopu";
import Pelisencartel from "../components/Pelisencartel/Pelisencartel";

function Home() {
  return (
    <React.Fragment>
      <Form/>
      <Pelispopu/>
      <Pelisencartel/>
    </React.Fragment>
  );
}

export default Home;