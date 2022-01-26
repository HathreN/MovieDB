import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from "axios";
import Header from "./header";
import Footer from "./footer";

const MovieDetailsComponent = () => {
    const [movieDetail, setMovieDetail] = useState([])
    const movieTitle = localStorage.getItem("movieTitle");
    const movieId = localStorage.getItem("id");
    console.log(movieId);
    useEffect(() => {
        getMovieDetails();
        setTimeout(function () {
            movieDetailShow();
        }, 1000);
    }, []);
    const getMovieDetails = () => {
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies/' + movieId,
            data: {
                title: title,
                image: image,
                content: content,
                id: id,
            }
        }).then((response) => {
            const data = response.data;
            setMovieDetail(data);
            //console.log(data);
            console.log('Data has been received!');
        }).catch((error) => {
            alert('Error retrieving data!');
            console.log(error);
        });
    }
    const title = '';
    const image = '';
    const content = '';
    const id = '';
    let movieContent;

    function movieDetailShow() {
        console.log("refresh")
        movieContent = (
            <div>
            <div id="movieTitle" className="movieTitle">
                <text className="movieDetailTitle">{movieDetail.title}</text>
            </div>
            <div id="movieDetailContent" className="movieDetailContent">
                <div id="movieLogo" className="movieLogo">
                    <img className="movieDetailLogo" src={movieDetail.image} alt="Logo"/>
                </div>
                <div id="movieContent" className="movieContent">
                    <text className="movieDetailDescription">{movieDetail.content}</text>
                </div>
            </div>
            </div>
        )
        return movieContent;
    }

    return (
        <div id="movieDetailsPage" className="movieDetailsPage">
            <Header/>
            {movieDetailShow()}
            <div id="movieDetailFooter">
                <Footer/>
            </div>
        </div>
    )
};

export default MovieDetailsComponent;

