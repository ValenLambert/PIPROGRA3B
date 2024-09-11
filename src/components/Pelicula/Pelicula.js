import React, { Component } from "react";
import {Link} from "react-router-dom";


class Pelicula extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            img: props.img,
            extra: props.extra,
            info:true,
            agregada: true,
        }
        console.log("MIRAAA", props)
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

    favoritos (){
        if(this.state.agregada){
            this.setState ({
                agregada: false
            })
        } else {
            this.setState ({
                agregada: true
            })
        }
    }
    
    

    render () {
        return (
                <article className='character-card'>
                    <img src={`https://image.tmdb.org/t/p/original${this.state.img}`} alt={this.state.title} />
                    <h4>{this.state.title}</h4>
                    <Link to={`detalle/${this.state.id}`}>
                        <button className="Botonete">Ir a detalle</button> <br />
                    </Link>
                    <button className="Botonete" onClick={() => this.cambio()}>
                        {this.state.info ? 'Ver descripcion' : 'Ver menos'}
                    </button>
                    <div className={`${this.state.info ? 'hidden' : 'show'}`}>
                        <p>{this.state.extra}</p>
                    </div> <br></br>
                    <br></br>
                    <p className="delete" onClick={() => this.favoritos()}>
                        {this.state.agregada ? 'Agregar a favoritos' : 'Quitar de favoritos'}</p>                
                </article>)
        }
}

export default Pelicula;