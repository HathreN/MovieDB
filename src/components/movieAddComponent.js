import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import Header from "./header"
import Footer from "./footer";
import axios from "axios";

const MovieAddComponent = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate();
    const HandleSubmit = (event) => {
        if(title.length===0 || image.length===0 || content.length===0){
            event.preventDefault();
            document.getElementById('titleInput').style.borderColor="red";
            document.getElementById('titleInput').style.borderStyle="solid";
            alert('Pola nie mogą być puste')
        } else {
            event.preventDefault();
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/movies',
                data: {
                    title: title,
                    image: image,
                    content: content,
                }
            }).then((response) => {
                navigate('/');
            }).catch((error) => {
                alert("Podany email lub login są już używane!")
                console.log(error);
            });
        };
    };


    return (
        <div id="movieAddPage">
            <div>
                <Header/>
                <div className="movieAddContent">

                    <div id="signForm">
                        <form id="formSign" onSubmit={HandleSubmit}>
                            <input className="form-control"  id="titleInput"
                                   style={{marginTop: '30px', width: '1100px', marginLeft: '20px'}}
                                   placeholder="Podaj tytuł" onChange={e => setTitle(e.target.value)}/><br/>
                            <input className="form-control" style={{width: '1100px', marginLeft: '20px'}} id="contentInput"
                                   placeholder="Podaj fabułę filmu" onChange={e => setContent(e.target.value)}/><br/>
                            <input className="form-control" style={{width: '1100px', marginLeft: '20px'}} id="imageInput"
                                   placeholder="Podaj link do plakatu, np https://fwcdn.pl/fpo/58/95/545895/7990124.6.jpg"
                                   onChange={e => setImage(e.target.value)}/><br/>
                            <button id="headerButton" type="submit">
                                Dodaj film!
                            </button>
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

export default MovieAddComponent;

