import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Movie() {
    useEffect(() => {
        getMovies();
    }, []);
    const navigate = useNavigate();
    const title = '';
    const image = '';
    const [token, setToken] = useState('')
    const content = '';
    const id = '';
    const [movies, setMovies] = useState([])
    const detailsButton = (movieId) => {
        localStorage.setItem("id", movieId)
        navigate('/details');
    };

    const getMovies = () => {
        setToken(localStorage.getItem('token'))
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: title,
                image: image,
                content: content,
                id: id,
            }
        }).then((response) => {
            const data = response.data;
            setMovies(data);
            //console.log(data);
            console.log('Data has been received!');
        }).catch((error) => {
            alert('Error retrieving data!');
            console.log(error);
        });
    };
    let topMovies = [16, 5, 10, 12, 6, 2, 14, 8, 15, 9];
    return (
        <div style={{color: 'orange', fontSize: '20px'}}>Top 10 filmów
            <div id="topMovies">
                <div id="topMoviesRow" className="topMoviesRow">
                    {movies.map((props, index) => (
                        topMovies.includes(index) ? (
                            <touchableopacity className="movieCard" onClick={() => detailsButton(props.id)}>
                                <div id="movieLogo" className="movieLogo"><img className="movieLogo" src={props.image} alt="Logo"/></div>
                                <div id="movieTitle" className="movieTitle">
                                    <text className="movieTitle">{props.title}</text>
                                </div>
                            </touchableopacity>
                        ) : false
                    ))}
                </div>
            </div>
            Wszystkie filmy
            <div id="movies" className="movies">

                <div id="moviesRowOne" className="moviesRowOne">
                    {movies.map((props, index) => (
                        <touchableopacity className="movieCard" onClick={() => detailsButton(props.id)}>
                            <div id="movieLogo" className="movieLogo"><img className="movieLogo" src={props.image} alt="Logo"/></div>
                            <div id="movieTitle" className="movieTitle">
                                <text className="movieTitle">{props.title}</text>
                            </div>
                        </touchableopacity>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movie;
