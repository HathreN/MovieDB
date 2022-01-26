import '../App.css';
import logo from '../logo.png';
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {decodeToken, isExpired} from "react-jwt";

const Header = () => {
    const [movieTitle, setMovieTitle] = useState('')
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();
    const title = '';
    const id = '';
    useEffect(() => {
        localStorage.setItem("id", '');
        localStorage.getItem("token")
        getMovies();
    }, []);
    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: title,
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
    const HandleSubmit = (event) => {
        if (movieTitle.length === 0) {
            event.preventDefault();
            alert('Pola nie mogą być puste')
        } else {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].title === movieTitle && movieTitle !== '') {
                    localStorage.setItem("id", movies[i].id);
                    navigate('/details');
                }
                document.getElementById("wrongTitle").style.visibility = 'visible';
            }
            setTimeout(function () {
                document.getElementById("wrongTitle").style.visibility = 'hidden';
            }, 2000);
        }
    }
    const logInButton = () => {
        navigate('/login');
    };

    const movieAddButton = () => {
        navigate('/add');
    };
    const logoButton = () => {
        navigate('/')
    };
    const logOutButton = () => {
        const userId = decodeToken(localStorage.getItem('token'))
        console.log(userId);
        axios({
            method: 'delete',
            url: 'https://pr-movies.herokuapp.com/api/user/logout/:userId',
            data: {
                userId: userId.userId,
            }
        }).then((response) => {
            localStorage.removeItem('token')
            navigate('/');
        }).catch((error) => {
            alert("Próba wylogowania nieudana")
            console.log(error);
        });
    };
    const signInButton = () => {
        navigate('/signUp')
    };
    const refresh = () => {
        window.location.reload();
    }
    console.log(isExpired(localStorage.getItem('token')))
    if (isExpired(localStorage.getItem('token'))) {
        return (
            <div id="header" className="header">
                <div className="headerContent">
                    <div id="logo" className="logo">
                        <img className="logoImage" src={logo} onClick={logoButton}/>
                    </div>
                    <div id="searchBar" className="searchBar">
                        <form id="formSign" onSubmit={HandleSubmit}>
                            <input className="searchBarContent" placeholder="szukaj filmów i seriali..."
                                   onChange={e => setMovieTitle(e.target.value)}/>
                            <button id="searchBarButton" type="submit" title="Wyszukaj">
                                Wyszukaj film
                            </button>
                        </form>
                        <div id="wrongTitle" id="wrongTitle" style={{
                            visibility: "hidden",
                            color: 'orange',
                            backgroundColor: '#282c34',
                            borderRadius: '5px',
                            width: '400px'
                        }}>Film o podanym tytule nie istnieje w naszej
                            bazie
                        </div>
                    </div>
                    <div id="signUp" className="signUp">
                        <div id="headerButton" onClick={() => signInButton()}>Sign in</div>
                    </div>
                    <div id="logIn" className="logIn">
                        <div id="headerButton" onClick={() => logInButton()}>Log in</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div id="header" className="header">
                <div className="headerContent">
                    <div id="logo" className="logo">
                        <img className="logoImage" src={logo} onClick={() => logoButton()}/>
                    </div>
                    <div id="searchBar" className="searchBar">
                        <form id="formSign" onSubmit={HandleSubmit}>
                            <input className="searchBarContent" placeholder="szukaj filmów i seriali..."
                                   onChange={e => setMovieTitle(e.target.value)}/>
                            <button id="searchBarButton" type="submit">
                                Wyszukaj film
                            </button>
                        </form>
                        <div id="wrongTitle" style={{
                            visibility: "hidden",
                            color: 'orange',
                            backgroundColor: '#282c34',
                            borderRadius: '5px',
                            width: '400px'
                        }}>Film o podanym tytule nie istnieje w naszej
                            bazie
                        </div>
                    </div>
                    <div id="signUp" className="signUp">
                        <div id="headerButton" onClick={() => movieAddButton()}>Add movie</div>
                    </div>
                    <div id="logIn" className="logIn">
                        <div id="headerButton" onClick={() => logOutButton()}>Log out</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

