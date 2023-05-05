import React from "react";
import "./App.css";
import Connexion from './Connexion'
import Inscrire from './Inscription'
import HomePageConnecte from './HomePageConnecte'
import AddBonPlan from './AjouterBonPlan'
import MesBonPlan from './MesBonPlans'
import PushNotificationDemo from "./PushNotificationDemo";
import { Routes, Route, Link } from 'react-router-dom';
import AllBonPlan from './AllBonPlan'
import { Button } from '@material-ui/core';

function App() {
  return (
    <Routes>
      {/* <NavBar/> */}
        <Route path="/" element={<><NavBar/><AllBonPlan /></>} />
        <Route path="Connexion" element={<Connexion />} />
        <Route path="Inscrire" element={<Inscrire />} />
        <Route path="Connecte" element={<HomePageConnecte />} />
        <Route path="AddBonPlan" element={<AddBonPlan />} />
        <Route path="MesBonPlan" element={<MesBonPlan />} />
        <Route path="Profil" element={<Notification />} />
        {/* <Route path="AllBonPlan" element={<AllBonPlan />} /> */}
    </Routes>
  );
}

function NavBar() {
  const buttonStyle = {
    textTransform: 'none',
    color: '#3947bf',
    fontSize: 25,
    marginRight: 50,
  };

  return (
    <div style={{display : 'flex' , alignItems : 'center', flexDirection : 'row', backgroundColor : "#e8e8e8", justifyContent : "space-between"}}>
      <div style={{width : 300, textAlign: "center", color : "#3947bf"}}><h1>InstanThink</h1></div>
      {(!localStorage.getItem("token")) ? (<><Button component={Link} to="/Connexion" style={buttonStyle}>
        Connexion
      </Button>
      <Button component={Link} to="/Inscrire" style={buttonStyle}>
        S'Inscrire
      </Button> </>): <Button component={Link} to="/profil" style={buttonStyle}>
        Profil
      </Button>}
    </div>
  )
}
function Notification() {
  if (localStorage.getItem("token"))
    return (
      <div className="App">
        <PushNotificationDemo />
      </div>
    )
  else 
  return (
    <div className="App">
      <div>Vous n'etes pas Connecte</div>
    </div>
  )
}

// function Home() {
  
//   return (
//     <div style={{display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center', gap: '2rem'}}>
//       <Link to='/Inscrire' style={{border: 'solid',
//     borderRadius: '10px',
//     textDecoration : 'none',
//     color: 'grey',
//     padding: '1rem'}}>Inscription</Link>
//       <Link to='/Connexion' style={{border: 'solid',
//     borderRadius: '10px',
//     color: 'grey',
//     textDecoration : 'none',
//     padding: '1rem'}}>Connexion</Link>
//     <Link to='/Notification' style={{border: 'solid',
//     borderRadius: '10px',
//     color: 'grey',
//     textDecoration : 'none',
//     padding: '1rem'}}>Notification</Link>
//     </div>
//   )
// }

export default App;
