import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import Header from "./header"

const MovieAddComponent = () => {

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [birthdayDay, setBirthdayDay] = useState('01')
    const [birthdayMonth, setBirthdayMonth] = useState('01')
    const [birthdayYear, setBirthdayYear] = useState('1988')
    const [birthday, setBirthday] = useState('01-01-1988')

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
                        Cieszymy się że chcesz dodać film na naszej stronie. Podążaj za instrukcjami, a na pewno się uda :)
                    </div>
                    <div id="signForm">
                        <form id="formSign">
                            <input className="form-control" placeholder="Podaj tytuł"/><br/>
                            <input className="form-control" placeholder="Podaj rok powstania filmu" /><br/>
                            <input className="form-control" placeholder="Podaj gatunek filmu" /><br/>
                            <input className="form-control" placeholder="Podaj fabułę filmu" /><br/>
                            <input className="form-control" placeholder="Podaj link do plakatu, np https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg"/><br/>

                            <button className="btn btn-primary" id="createAccountButton">
                                Dodaj film!
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default MovieAddComponent;

