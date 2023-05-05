import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

function HomePageConnecte() {
    const navigate = useNavigate();
    if (localStorage.getItem("token"))
    return (
        <div className='signin'>
            <div className='box-signin'>
                <form className='container'>
                    <h3>Accueil</h3>
                    <div className='form-sign'>
                        <div className="inputBox2">
                            <button onClick={() => navigate('/AddBonPlan')}>Poster un message</button>
                        </div>
                        <div className="inputBox2">
                            <button onClick={() => navigate('/MesBonPlan')}>Mes messages</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    else 
        return (
            <div>
                Vous devez être connecté
            </div>
        )
}


export default HomePageConnecte;