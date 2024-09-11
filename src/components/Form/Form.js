import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            valor : ""
        }
    }

    evitarSubmit (event){
        event.PreventDefault()
    }

    controlarCambios (event){

    }

    filtrarPeliculas (nombrePelicula){
        const peliculasfiltradas = this.state.peliculas.filter(
            (elem)=>elem.tittle.tolowercase().includes(nombrePelicula.tolowercase())
        )
    }

    render (){
        return (
            <React.Fragment>
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Busca tu película..."
                        onChange={(event) => this.controlarCambios(event)}
                    />
            </form>
            </React.Fragment>)
}
}
export default Form