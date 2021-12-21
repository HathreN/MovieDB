import React, {useState} from 'react';
import "../App.css"
import logo from "../logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

const LoginComponent = (props) => {

    const navigate = useNavigate();

    const LogInButton = () => {
        navigate('/')
    };

    const SignUpButton = () => {
        navigate('/signUp')
    };
    const mainPageButton = () => {
        navigate('/')
    };
    return (

        <div id="loginBackground" className="loginBackground">
                <div className="loginContent">
                    <div className="imageCss">
                        <img className="loginLogo" src={logo} onClick={mainPageButton}/>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={LogInButton}>Log in</button>
                        <button className="btn btn-outline-primary" onClick={SignUpButton}>Sign up</button>
                    </form>

                </div>
        </div>
    )
};


export default LoginComponent;

