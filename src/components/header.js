import '../App.css';
import logo from '../logo.png';
import logInButton from '../logInButton.png';

function Header() {
        const refresh = () => {
            window.location.reload();
        }
        return (
            <div id="header" className="header">
                <div id="logo" className="logo"><img className="logoImage" src={logo} alt="Logo"></img></div>
                <div id="searchBar" className="searchBar"><input className="searchBar" placeholder="Wpisz tytuł filmu"></input></div>
                <div id="logIn" className="logIn"><img className="logInButton" src={logInButton} alt="my image" onClick={refresh}/></div>
            </div>);
}
export default Header;