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
    const [allTalents, setAllTalents] = useState({})
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

    async function getAllTalents() {
        try {
            let {data} = await Axios.get(`http://localhost:8000/talents/`)
            setAllTalents(data)
            console.log(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    useEffect(() => {
        async function setUserStats() {
            try {
                let {data} = await Axios.get("http://localhost:8000/users/")
                console.log(data)
                setTalentData(prevState => ({...prevState, scout: data[0].id}))
                setUser(data[0])
            } catch (e) {
                console.log(e)
            }
        }
        setUserStats()
    }, [])

    useEffect(()=>{
        getAllTalents()
    },[loggedIn])

  return (

    <div className="App">

        <BrowserRouter>
            <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} talentData={talentData} setTalentData={setTalentData} allTalents={allTalents} setAllTalents={setAllTalents} />
            <div>
                <Switch>
                    <Route path="/register" exact>
                        <RegisterView loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} talentData={talentData} setTalentData={setTalentData}  allTalents={allTalents} setAllTalents={setAllTalents}/>
                    </Route>

                    <Route path="/login" exact>
                        <LoginView loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} talentData={talentData} setTalentData={setTalentData} allTalents={allTalents} setAllTalents={setAllTalents}/>
                    </Route>
                    <PrivateRouter path="/charts" Component={ChartsView} loggedIn={loggedIn} setLoggedIn={setLoggedIn} talentData={talentData} setTalentData={setTalentData} user={user} setUser={setUser} allTalents={allTalents} setAllTalents={setAllTalents}/>

                    <PrivateRouter path="/" Component={HomeView} loggedIn={loggedIn} setLoggedIn={setLoggedIn} talentData={talentData}
                                   setTalentData={setTalentData} user={user} setUser={setUser}
                                   allTalents={allTalents} setAllTalents={setAllTalents}/>

                </Switch>
            </div>
        </BrowserRouter>

    </div>
  );
}

function PrivateRouter({loggedIn, user, Component, path, ...rest}){
    return(
        <>
            { (loggedIn) ?
                <Route exact path={path}>
                    <Component {...rest}/>
                </Route> : <Redirect to="/login" />
            }
        </>
    )
}

export default App;

