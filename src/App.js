import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginComponent from './components/loginComponent';
import MovieAddComponent from './components/movieAddComponent';
import MovieDetailsComponent from './components/movieDetailsComponent';
import RegistrationComponent from './components/registrationComponent';
import MainComponent from './components/mainComponent';
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path ='/' element={<MainComponent/>} />
                    <Route path ='/login' element={<LoginComponent/>} />
                    <Route path ='/signUp' element={<RegistrationComponent/>} />
                    <Route path ='/add' element={<MovieAddComponent/>} />
                    <Route path ='/details' element={<MovieDetailsComponent/>} />
                </Routes>

            </Router>
        </div>
    );
}

export default App;
