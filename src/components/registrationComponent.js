import React, {useState} from 'react';
import logo from "../logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "./footer";

const RegistrationComponent = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const loginButton = () => {
        navigate('/login')
    };
    const mainPageButton = () => {
        navigate('/')
    };
    const HandleSubmit = (event) => {
        if(name.length===0 || email.length===0 || password.length===0){
            event.preventDefault();
            alert('Pola nie mogą być puste')
        } else {
            event.preventDefault();
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/create',
                data: {
                    name: name,
                    email: email,
                    password: password,
                }
            }).then((response) => {
                navigate('/login');
            }).catch((error) => {
                console.log(error);
            });
        };
    };

    return (
        <div id="loginBackground" className="loginBackground">
            <div id="loginBackground">
                <div>
                    <img className="loginLogo" src={logo} onClick={mainPageButton}/>
                </div>

                <div id="signForm" classname="signForm">
                    <div className="signUpContent">
                        <form id="formSign" onSubmit={HandleSubmit}>
                            <input className="form-control" style={{marginTop: '30px', width: '1100px', marginLeft: '20px'}} placeholder="First Name" size="lg" onChange={e => setName(e.target.value)}/><br/>
                            <input className="form-control" style={{width: '1100px', marginLeft: '20px'}}placeholder="Email" size="lg" onChange={e => setEmail(e.currentTarget.value)}/><br/>
                            <input id="password1" style={{width: '1100px', marginLeft: '20px'}} className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/><br/>
                            <button id="headerButton" type="submit" >Utwórz konto</button>&nbsp;&nbsp;
                            <button id="headerButton" onClick={() => loginButton()}>Posiadasz konto? zaloguj się</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
    )
};

export default RegistrationComponent;

