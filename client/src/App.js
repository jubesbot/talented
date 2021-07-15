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
    })

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
    }, [loggedIn])

    console.log(talentData)
    console.log(user)

  return (

    <div className="App">

        <BrowserRouter>
            <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} talentData={talentData} setTalentData={setTalentData} />
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

