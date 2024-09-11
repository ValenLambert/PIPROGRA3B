import React, { Component } from "react";
import "./Movie.css";
import Pelicula from "../Pelicula/Pelicula";
const apiKey= '42737f60c529bfe7e9586db8cb132a1c';

class Pelispopu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            peliculas: []
        }
    }

    componentDidMount (){
        console.log("mount")
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`) 
        .then((resp)=> resp.json()) 
        .then((data)=> {
            this.setState({
                peliculas: data.results
            });
        })
        .catch((e)=> console.log (e))
    }

    componentDidUpdate (){
        console.log("update")
    }

    componentWillUnmount(){
        console.log("unmount")
    }

    render () {
        console.log("soy el render")
        return (
            <div>
            {
                this.state.peliculas.length >0
                ?
                this.state.peliculas.map((elem) => (
                    <Pelicula
                        img={elem.poster_path}   
                        title={elem.title} 
                        id={elem.id}
                        extra= {elem.overview}
                    />
                )
                )
                :
                <h2>Cargando...</h2>
            }
        </div>
        
        )
    }
}

export default Pelispopu