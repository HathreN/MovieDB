import React from 'react';

import Header from "./header";
import Movie from "./movie";
import Footer from "./footer";

const MainComponent = () => {


    return (
        <div id="mainPage" className="mainPage">
            <Header/>
            <Movie/>
            <Footer/>
        </div>
    );
}

export default MainComponent;
