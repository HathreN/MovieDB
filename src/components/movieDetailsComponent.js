import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import Header from "./header"

const MovieDetailsComponent = () => {

    const navigate = useNavigate();

    const mainPageButton = () => {
        navigate('/')
    };


    return (
        <div className="mainPage">
            <div>
                <Header/>
                <div className="movieAddContent">

                    <div className="addMovieInfo">
                        Here all the info about a choosen movie will be displayed
                    </div>


                </div>
            </div>
        </div>
    )
};

export default MovieDetailsComponent;

