import React, {useState} from 'react';
import logo from "../logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

const RegistrationComponent = () => {

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

    const LogOutButton = () => {
        navigate('/login')
    };
    const mainPageButton = () => {
        navigate('/')
    };



    const handleClick = (event) => {
        event.preventDefault()
        setShow(!show)
    }

    const Check = () => {
        if ((document.getElementById('password1').value === document.getElementById('password2').value) && (document.getElementById('password1').value !== '')) {
            let date = birthdayDay + "-" + birthdayMonth + "-" + birthdayYear;
            setBirthday(date);
            return true;
        } else {
            document.getElementById('signUpBackground').style.backgroundColor = '#A51010';
            setTimeout(function () {
                document.getElementById('signUpBackground').style.backgroundColor = '#15202b';
            }, 400);
            document.getElementById('password1').style.borderColor = '#A51010';
            document.getElementById('password2').style.borderColor = '#A51010';
            return false;
        }
    };

    return (
        <div id="loginBackground" className="loginBackground">
            <div id="loginBackground">
                <div>
                    <img className="loginLogo" src={logo} onClick={mainPageButton}/>
                </div>

                <div id="signForm" classname="signForm">
                    <div className="signUpContent">
                    <form id="formSign">
                        <input className="form-control" placeholder="Nickname"
                               onChange={e => setNickname(e.target.value)}/><br />
                        <input  className="form-control" placeholder="First Name" size="lg"
                                onChange={e => setName(e.target.value)}/><br />
                        <input  className="form-control" placeholder="Surname" size="lg"
                                onChange={e => setSurname(e.target.value)}/><br />
                        <input  className="form-control" placeholder="Email" size="lg"
                                onChange={e => setEmail(e.currentTarget.value)}/><br />
                        <inputGroup className="formInput" size="md">
                            <input id="password1"
                                   className="form-control"
                                   pr="4.5rem"
                                   type={show ? "text" : "password"}
                                   placeholder="Password"
                                   onChange={e => setPassword(e.target.value)}
                            />
                            <inputRightElement width="4.5rem">
                                <button h="1.75rem" size="sm" onClick={handleClick} color="black">
                                    {show ? "Hide" : "Show"}
                                </button>
                            </inputRightElement>
                        </inputGroup>
                        <input  className="form-control" id="password2"
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Repeat password"
                        />

                        <div id="birthdayInputs">
                            <select  className="form-control" id="dayOptions" variant="outline"
                                     onChange={e => setBirthdayDay(e.target.value)} defaultValue="Day">
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>

                            <select  className="form-control" id="monthOptions" variant="outline" onChange={e => setBirthdayMonth(e.target.value)} value={{value: 'one', label: 'One'}}>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>

                            <select  className="form-control" id="yearOptions" variant="outline" onChange={e => setBirthdayYear(e.target.value)} defaultValue="Year">
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                            </select>
                        </div>
                        <br/>
                        <button className="btn btn-primary" id="createAccountButton" onClick={LogOutButton}>Create an account!</button>&nbsp;&nbsp;
                        <button className="btn btn-outline-primary" onClick={LogOutButton}>Already have an account? Log In!</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegistrationComponent;

