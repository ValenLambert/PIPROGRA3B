import React, { Component } from "react";
import "./Movie.css";
import Pelicula from "../Pelicula/Pelicula";
import Buscador from "../Buscador/Buscador";
const apiKey = '42737f60c529bfe7e9586db8cb132a1c';

class Pelispopu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            mostrar: 5,
            busqueda: ""
        }
    }

    verMas() {
        this.setState((prevState) => ({
            mostrar: prevState.mostrar + 5
        }));
    }

    verMenos() {
        this.setState(() => ({
            mostrar: 5
        }));
    }




    componentDidMount() {
        console.log("mount")
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results
                });
            })
            .catch((e) => console.log(e))
    }
    // from de busqueda
    buscarPeliculas = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&language=en-US&page=1&api_key=${apiKey}`)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results ? data.results : []
                });
            })
            .catch((error) => console.log(error))
    }

    // form
    evitarSubmit = (event) => {
        event.preventDefault();
        this.buscarPeliculas(); // Realizar la búsqueda al enviar el formulario
    }

    controlarCambios = (event) => {
        this.setState({
            busqueda: event.target.value
        });
    }

    componentDidUpdate() {
        console.log("update")
    }

    componentWillUnmount() {
        console.log("unmount")
    }



    render() {
        const peliculasAMostrar = this.state.peliculas
        .filter(pelicula => pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase()))
        .slice(0, this.state.mostrar)

        //form:
        // const peliculasFiltradas = this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase()));

        return (
            <React.Fragment>
                <h1 className="Subtitulos">Peliculas populares:</h1>
                <Buscador
                            evitarSubmit={this.evitarSubmit}
                            controlarCambios={this.controlarCambios}
                            busqueda={this.state.busqueda}
                        />

                {this.state.peliculas.length === 0 ? (
                     <h1>Cargando ...</h1> ) :
                     peliculasAMostrar.length > 0 ? (
                    <>
                        <div className="Tarjeta">
                            {peliculasAMostrar.map((elem) => (
                                <Pelicula
                                    key={elem.id} // Asegúrate de incluir una `key` única para cada elemento
                                    img={elem.poster_path}
                                    title={elem.title}
                                    id={elem.id}
                                    extra={elem.overview}
                                />
                            ))}
                        </div>
                        <button className="Boton" onClick={() => this.verMas()}>Ver más</button>
                        {this.state.mostrar > 5 && (
                            <button className="Boton" onClick={() => this.verMenos()}>Ver menos</button>
                        )}
                    </>
                ) : 
                
                <h1> No se ha encontrado ningun resultado </h1>}
                
            </React.Fragment>

        )
    }
}

export default Pelispopu