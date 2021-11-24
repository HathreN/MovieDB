import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js'
import Movie from "./components/movie";

function App() {

    return (
        <div id="mainPage" className="mainPage">
            <Header/>
            <Movie/>

        </div>
    );
}

export default App;
