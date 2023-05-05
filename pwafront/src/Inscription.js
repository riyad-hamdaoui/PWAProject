import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

function Inscrire() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/creation', { email: email, password: password }, { header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' } })
            .then(res => {
                event.preventDefault();
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("email", email);
                alert('vous etes connectes')
                navigate('/Connecte');
            }).catch((error) => {
                alert("error");
            });
    };

    return (
        <div className='signin'>
            <div className='box-signin'>
                <form className='container' onSubmit={handleSubmit}>
                    <h3>Inscription</h3>

                    <div className='form-sign'>
                        <div className="inputBox">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="Email" id="Email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </div>

                        <div className="inputBox">
                            <label htmlFor="userPassword">Mot de passe</label>
                            <input type="password" name="userPassword" id="userPassword" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password"
                                required />
                        </div>

                        <div className='box-b'>
                            <button type="submit">S'inscrire</button>
                            <Link className="button" to="/Connexion">Se connecter ?</Link>
                            <div id="signUpDiv">
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}


export default Inscrire;