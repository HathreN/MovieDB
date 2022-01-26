import React, {useState} from 'react';
import "../App.css"
import logo from "../logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {connect} from "react-redux";
import Footer from "./footer";

const LoginComponent = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const HandleSubmit = (event) => {
        if(name.length===0 || password.length===0){
            event.preventDefault();
            alert('Pola nie mogą być puste')
        } else {
            event.preventDefault();
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/auth',
                data: {
                    login: name,
                    password: password,
                }
            }).then((response) => {
                localStorage.setItem('token', response.data.token);
                navigate('/');
                window.location.reload();
            }).catch((error) => {
                alert("Podany email lub login nie istnieją!")
                console.log(error);
            });
        }
    };
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
            <div className="imageCss">
                <img className="loginLogo" src={logo} onClick={mainPageButton}/>
            </div>
                <div className="loginContent">
                    <form id="formSign" onSubmit={HandleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{marginTop: '30px', color: "orange"}}>Login</label>
                            <input type="text" className="form-control" style={{ width: '1100px', marginLeft: '20px'}} id="exampleInputEmail1" placeholder="Podaj swój login"
                                   aria-describedby="emailHelp" onChange={e => setName(e.target.value)}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{color: "orange"}}>Hasło</label>
                            <input type="password" className="form-control" style={{width: '1100px', marginLeft: '20px'}}id="exampleInputPassword1" placeholder="Podaj swoje hasło" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <button type="submit" className="logInButton" id="logInButton">Log in</button>
                        <button id="headerButton" onClick={SignUpButton}>Sign up</button>
                    </form>

                </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
    )
};

export default LoginComponent;

