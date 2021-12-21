import React from 'react';

import Header from "./header";
import Movie from "./movie";

const MainComponent = () => {


    return (
        <div id="mainPage" className="mainPage">
            <Header/>
            <Movie/>
        </div>
    );
}

export default MainComponent;
