import '../App.css';
import logo from '../logo.png';
import logInButton from '../logInButton.png';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const LogInButton = () => {
        navigate('/login');
    };

    const movieAddButton = () => {
        navigate('/add');
    };
    const logoButton = () => {
        navigate('/')
    };
    const refresh = () => {
        window.location.reload();
    }


    return (
        <div id="header" className="header">
            <div className="headerContent">
                <div id="logo" className="logo">
                    <img className="logoImage" src={logo} onClick={logoButton}/>
                </div>
                <div id="searchBar" className="searchBar">
                    <input className="searchBar" placeholder="szukaj filmów i seriali..."/>
                </div>
                <div id="signUp" className="signUp">
                    <div id="signUp" className="btn btn-secondary"onClick={movieAddButton}>Add movie</div>
                </div>
                <div id="logIn" className="logIn">
                    <div id="logIn" className="btn btn-secondary"onClick={LogInButton}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default Header;

