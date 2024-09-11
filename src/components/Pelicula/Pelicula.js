import React, { Component } from "react";
import {Link} from "react-router-dom";


class Pelicula extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            img: props.img,
            extra: props.overview,
            info:true,
        }
    }
    
    cambio () {
        if(this.state.info){
            this.setState ({
                info: false
            })
        } else {
            this.setState ({
                info: true
            })
        }
    }
    
    render () {
        return (
            this.props ? (
                <article className='character-card'>
                    <img src={this.state.img} alt={this.state.title} />
                    <h4>{this.state.title}</h4>
                    <Link to={`detalle/${this.state.id}`}>
                        <button>Ir a detalle</button> <br />
                    </Link>
                    <button onClick={() => this.cambio()}>
                        {this.state.info ? 'Ver descripcion' : 'Ver menos'}
                    </button>
                    <div className={`${this.state.info ? 'hidden' : 'show'}`}>
                        <p>{this.state.extra}</p>
                    </div>
                    <p className='delete'>Borrar</p>                
                
                </article>
            ) : (
                <h1>Cargando...</h1>
            )
        );
        }
}

export default Pelicula;