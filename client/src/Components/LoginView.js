import React, {useEffect} from 'react';
import Axios from "../Util/Axios";
import {Button, Container, Form} from "react-bootstrap";
import {Redirect} from "react-router-dom";

function LoginView({loggedIn, setLoggedIn, user, setUser, talentData, setTalentData}) {

    useEffect(() => {
        if (loggedIn){
            console.log('logged in cos I got both tokens :)')
            setTalentData(prevState => ({...prevState, scout_id: user.id}))
        }else{
            console.log('not logged in cos I no tokens :(')
            return < Redirect to="/login" />
        }
    }, [])
    console.log(talentData)

    async function login(e){
        e.preventDefault()
        try {
            let {data} = await Axios.post("http://localhost:8000/api/token/", {username: user.username, password:user.password})
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
            console.log(data)
            setLoggedIn(true)
            setTalentData(prevState => ({...prevState, scout_id: user.id}))
        } catch (e) {
            console.log(e)
            alert('try again!')
        }
    }

    if (loggedIn === true){

        return < Redirect to="/" />
    }

    async function handleChange(e) {
        try {
            console.log(e.target.id)
            await setUser(prevState => ({...prevState, [e.target.id]: e.target.value}))
            console.log(user)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h3>Login</h3>

            <Form onSubmit={login} className='col-md-5 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control id='username' name="username" placeholder="Enter username" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="inputForPassword">Password</Form.Label>
                    <Form.Control id='password' type="password" placeholder="Enter password" onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>

            </Form>

        </div>

    );
}

export default LoginView;