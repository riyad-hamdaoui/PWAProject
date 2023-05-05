import React, { useState } from 'react';
import axios from 'axios'
import { AiFillMessage } from 'react-icons/ai';
import './Login.scss'

function AddBonPlan() {
    const [response] = useState([{id : '', name : 'Bonnes vacances à tous'}, {id : '', name : 'Bonne soirée les mecs'}]);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://backpwa.onrender.com/MesBonPlan', { token: localStorage.getItem("token")}, { header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' } })
            .then(res => {
                event.preventDefault();
            }).catch((error) => {
                alert("error");
            });
    };

    if (localStorage.getItem("token"))
        return (
            <div className='signin'>
                <div className='box-signin'>
                    <form className='container' onSubmit={handleSubmit}>
                        <h3>Mes Messages</h3>
                        {response.length > 0 ? (
              response.map((bonplan) => (
                <div className='container-tb' key={bonplan.id} style={{backgroundSize : 'contain', backgroundRepeat: 'no-repeat'}}>
                  <AiFillMessage/>
                  <div className='ff'>
                    <div className='box-separ'>
                      <h2>{bonplan.name}</h2>
                    </div>
                    </div>
                </div>
              ))
            ) : (
              <p>Aucuns post trouvé</p>
            )}
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