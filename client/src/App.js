import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import Axios from './Util/Axios';
import { Navbar, Container, Nav, Form, Button, } from 'react-bootstrap'
import Navigation from "./Components/Navigation";
import HomeView from "./Components/HomeView";
import LoginView from "./Components/LoginView";
import RegisterView from "./Components/RegisterView";
import ChartsView from "./Components/ChartsView";

function App() {

    const [loggedIn, setLoggedIn] = useState((localStorage.access && localStorage.refresh) ? true : false)
    const [user, setUser] = useState({})
    const [talentData, setTalentData] = useState({
        attribute_endurance: 1,
        attribute_strength: 1,
        attribute_power: 1,
        attribute_speed: 1,
        attribute_agility: 1,
        attribute_flexibility: 1,
        attribute_nerve: 1,
        attribute_durability: 1,
        attribute_handeye_coordination: 1,
        attribute_analytic_aptitude: 1,
    })

    useEffect(() => {
            if (loggedIn){
                console.log('logged in cos I got both tokens :)')
                setTalentData(prevState => ({...prevState, scout_id: user.id}))
            }else{
                console.log('not logged in cos I no tokens :(')
                return < redirect push to="/login" />
            }
    }, [])
    console.log(talentData)

  return (

    <div className="App">

        <BrowserRouter>
            <Navigation />
            <div>
                <Switch>
                    <Route path="/register" exact>
                        <RegisterView loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} talentData={talentData} setTalentData={setTalentData}/>
                    </Route>

                    <Route path="/login" exact>
                        <LoginView loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} talentData={talentData} setTalentData={setTalentData}/>
                    </Route>

                    <Route path="/" exact>
                        <HomeView loggedIn={loggedIn} setLoggedIn={setLoggedIn} talentData={talentData} setTalentData={setTalentData} user={user} setUser={setUser}/>
                    </Route>

                    <Route path="/charts" >
                        <ChartsView loggedIn={loggedIn} setLoggedIn={setLoggedIn} talentData={talentData} setTalentData={setTalentData} user={user} setUser={setUser}/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    </div>
  );
}

export default App;

