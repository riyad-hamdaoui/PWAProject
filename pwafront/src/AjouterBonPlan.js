import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import axios from 'axios';

function AddBonPlan() {
    const [Name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://localhost:8080/AddBonPlan', {
            "name" : Name,
            "token" : localStorage.getItem('token')
        }, { header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' } })
            .then(res => {
                event.preventDefault();
                navigate('/profil');
            }).catch((error) => {
                alert("error");
            });
    };
    if (localStorage.getItem("token"))
        return (
            <div className='signin'>
                <div className='box-signin'>
                    <form className='container' onSubmit={handleSubmit}>
                        <h3>Nouveau message</h3>

                        <div className='form-sign'>
                            <div className="inputBox">
                                <label htmlFor="Name">Message</label>
                                <input type="Name" name="Name" id="Name" placeholder="Vos pensées" value={Name} onChange={(event) => setName(event.target.value)} required />
                            </div>
                            <div className='box-b'>
                                <button type="submit">Poster le message</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    else 
        return (
            <div>
                NON Connecté
            </div>
        )
}


export default AddBonPlan;