import React, {Component} from 'react';
import './style.css'
class Buscador extends Component {
    render() {
        return(
            <>
            <form onSubmit={(event)=> this.props.evitarSubmit(event)}> 
            <input type="text" placeholder=' Buscar pelicula popular...' onChange={(event)=> this.props.controlarCambios(event)} value={this.props.busqueda} class="botonBuscar" />
            </form>
            </>
        )
    }
}

export default Buscador;